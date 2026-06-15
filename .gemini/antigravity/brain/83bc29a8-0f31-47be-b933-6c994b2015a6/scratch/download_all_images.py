import urllib.request
import urllib.parse
import json
import re
import os
import shutil

PRODUCTS_DIR = "/home/abdikhafar/Documents/js-perfumes-kenya-luxury-fragrances/public/products"
CATEGORIES_DIR = "/home/abdikhafar/Documents/js-perfumes-kenya-luxury-fragrances/public/categories"
LIFESTYLE_DIR = "/home/abdikhafar/Documents/js-perfumes-kenya-luxury-fragrances/public/lifestyle"

os.makedirs(PRODUCTS_DIR, exist_ok=True)
os.makedirs(CATEGORIES_DIR, exist_ok=True)
os.makedirs(LIFESTYLE_DIR, exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

def download_file(url, target_path):
    if os.path.exists(target_path) and os.path.getsize(target_path) > 1000:
        print(f"  File {os.path.basename(target_path)} already exists, skipping...")
        return True
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            content = response.read()
            with open(target_path, "wb") as f:
                f.write(content)
            print(f"  Successfully downloaded to {os.path.basename(target_path)} ({len(content)} bytes)")
            return True
    except Exception as e:
        print(f"  Failed to download from {url}: {e}")
        return False

def search_jumia_image(query):
    url = "https://www.jumia.co.ke/catalog/?q=" + urllib.parse.quote(query)
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            html = response.read().decode('utf-8', errors='ignore')
            urls = re.findall(r'(https://ke\.jumia\.is/unsafe/fit-in/[^"\']+\.jpg)', html)
            if urls:
                unique_urls = []
                for u in urls:
                    if u not in unique_urls:
                        unique_urls.append(u)
                for u in unique_urls:
                    if "product" in u:
                        large_url = u.replace("300x300", "500x500")
                        return large_url
                return unique_urls[0]
    except Exception as e:
        print(f"  Jumia search failed for '{query}': {e}")
    return None

# List of Jumia perfumes to download
jumia_perfumes = [
    {"id": "lattafa-asad", "query": "Lattafa Asad 100ml"},
    {"id": "armaf-cdn-intense", "query": "Armaf Club De Nuit Intense Man 105ml"},
    {"id": "armaf-cdn-woman", "query": "Armaf Club De Nuit Woman 105ml"},
    {"id": "rasasi-hawas", "query": "Rasasi Hawas Men 100ml"},
    {"id": "creed-aventus", "query": "Creed Aventus 100ml"},
    {"id": "dior-sauvage", "query": "Dior Sauvage EDP 100ml"},
    {"id": "tom-ford-oud-wood", "query": "Tom Ford Oud Wood 100ml"},
    {"id": "chanel-bleu", "query": "Chanel Bleu de Chanel EDP 100ml"},
    {"id": "ysl-libre", "query": "YSL Libre EDP 90ml"},
    {"id": "good-girl-blush", "query": "Carolina Herrera Good Girl Blush 80ml"},
    {"id": "nishane-100-silent", "query": "Nishane Hundred Silent Ways 50ml"},
    {"id": "moschino-toy-2", "query": "Moschino Toy 2 100ml"},
    {"id": "ck-euphoria", "query": "Calvin Klein Euphoria Men 100ml"},
    {"id": "lattafa-yara", "query": "Lattafa Yara 100ml"},
    {"id": "shaghaf-oud", "query": "Swiss Arabian Shaghaf Oud 75ml"},
    {"id": "badee-al-oud-amethyst", "query": "Lattafa Badee Al Oud Amethyst 100ml"},
    {"id": "bukhoor-afnan", "query": "Bukhoor Afnan"},
    {"id": "bukhoor-jamila", "query": "Bukhoor Jamila"},
    {"id": "bukhoor-al-dirham", "query": "Bukhoor Al Dirham"},
    {"id": "bukhoor-teef-al-hub", "query": "Teef Al Hub Bukhoor"},
    {"id": "khadlaj-air-freshener", "query": "Khadlaj Oud Wood Air Freshener"},
    {"id": "yara-room-spray", "query": "Lattafa Yara Room Spray"},
    {"id": "initio-oud-greatness", "query": "Initio Oud for Greatness"},
    {"id": "mfk-oud-satin", "query": "Maison Francis Kurkdjian Oud Satin Mood"},
    {"id": "creed-royal-oud", "query": "Creed Royal Oud"},
    {"id": "tf-oud-wood-intense", "query": "Tom Ford Oud Wood Intense"},
    {"id": "byredo-oud-immortel", "query": "Byredo Oud Immortel"},
    {"id": "amouage-epic-man", "query": "Amouage Epic Man"},
    {"id": "jm-oud-bergamot", "query": "Jo Malone Oud Bergamot"},
    {"id": "xerjoff-alexandria-ii", "query": "Xerjoff Alexandria II"}
]

# Verified working Unsplash images (checked and corrected)
category_unsplash = {
    "ouds": "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600",
    "bukhoors": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600",
    "incense-burners": "https://images.unsplash.com/photo-1541256996761-85df2efaa164?w=600",
    "perfume-oils": "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?w=600", # perfume oil bottle
    "air-fresheners": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600", # mist/spray
    "room-sprays": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600",
    "linen-sprays": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600",
    "car-fragrances": "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600",
    "creams": "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=600",
    "home-fragrance": "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600",
    # Main block categories
    "cat-men": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600",
    "cat-women": "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600",
    "cat-niche": "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?w=600",
}

custom_products_unsplash = {
    "gift-voucher": "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600",
    "luxury-gift-set": "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=600",
    "aqua-collection": "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?w=600",
    "traditional-mabkhara": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600",
    "custom-gold-burner": "https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?w=600",
    "yara-body-cream": "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=600",
    "musk-silk-cream": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600",
    "musk-abiyad-oil": "https://images.unsplash.com/photo-1617897903246-719242758050?w=600",
    "golden-sand-attar": "https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=600",
    "asad-car-fragrance": "https://images.unsplash.com/photo-1511389026070-a14ae610a1be?w=600",
    "oud-car-diffuser": "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600",
    "eid-mubarak-gift-box": "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=600",
    "royal-wedding-set": "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=600",
    "oud-abeer": "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?w=600",
    "oud-rose-linen-spray": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600",
    "oud-al-ameer": "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600"
}

# Copy existing ouds from assets
existing_ouds = {
    "kalemat-black.png": "kalemat-black.png",
    "dahn-al-oudh.png": "dahn-al-oudh.png",
    "la-yuqawam-ambergris.png": "la-yuqawam-ambergris.png",
    "supremacy-oud.png": "supremacy-oud.png",
    "shaghaf-oud-aswad.png": "shaghaf-oud-aswad.png",
    "amber-oud-gold.png": "amber-oud-gold.png",
    "badee-al-oud-glory.png": "badee-al-oud-glory.png"
}

print("=== 1. Copying Existing Oud Images ===")
assets_src = "/home/abdikhafar/Documents/js-perfumes-kenya-luxury-fragrances/src/assets"
for src_name, dest_name in existing_ouds.items():
    src_path = os.path.join(assets_src, src_name)
    dest_path = os.path.join(PRODUCTS_DIR, dest_name)
    if os.path.exists(src_path):
        shutil.copy2(src_path, dest_path)
        print(f"Copied {src_name} to public/products/{dest_name}")
    else:
        print(f"Warning: {src_path} not found!")

print("\n=== 2. Downloading Categories Images ===")
for cat, url in category_unsplash.items():
    target_path = os.path.join(CATEGORIES_DIR, f"{cat}.jpg")
    download_file(url, target_path)

print("\n=== 3. Downloading Custom/Lifestyle Products ===")
for prod_id, url in custom_products_unsplash.items():
    target_path = os.path.join(PRODUCTS_DIR, f"{prod_id}.jpg")
    download_file(url, target_path)

print("\n=== 4. Downloading Perfumes from Jumia Kenya ===")
failed_perfumes = []
for p in jumia_perfumes:
    target_path = os.path.join(PRODUCTS_DIR, f"{p['id']}.jpg")
    if os.path.exists(target_path) and os.path.getsize(target_path) > 1000:
        print(f"  File {os.path.basename(target_path)} already exists, skipping...")
        continue
        
    print(f"Searching Jumia for: {p['query']}...")
    img_url = search_jumia_image(p['query'])
    if img_url:
        print(f"  Found image URL: {img_url}")
        success = download_file(img_url, target_path)
        if not success:
            failed_perfumes.append(p)
    else:
        print(f"  No image found on Jumia for '{p['query']}'")
        failed_perfumes.append(p)

print("\n=== 5. Handling Failed Perfumes with Fallbacks ===")
fallback_perfume_url = "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600"
for p in failed_perfumes:
    target_path = os.path.join(PRODUCTS_DIR, f"{p['id']}.jpg")
    print(f"Applying fallback for: {p['id']}...")
    download_file(fallback_perfume_url, target_path)

print("\nAll tasks completed!")
