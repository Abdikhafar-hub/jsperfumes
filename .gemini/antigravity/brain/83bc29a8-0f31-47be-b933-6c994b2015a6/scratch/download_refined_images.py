import urllib.request
import urllib.parse
import re
import os
import time

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

def parse_jumia_products(query):
    url = "https://www.jumia.co.ke/catalog/?q=" + urllib.parse.quote(query)
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            html = response.read().decode('utf-8', errors='ignore')
            articles = re.findall(r'<article class="prd\b.*?>(.*?)</article>', html, re.DOTALL)
            results = []
            for art in articles:
                img_match = re.search(r'data-src="([^"]+)"', art)
                if not img_match:
                    img_match = re.search(r'src="([^"]+)"', art)
                title_match = re.search(r'<h3 class="name">([^<]+)</h3>', art)
                if img_match and title_match:
                    img_url = img_match.group(1).replace("300x300", "500x500")
                    title = title_match.group(1).strip()
                    results.append((title, img_url))
            return results
    except Exception as e:
        print(f"Jumia parsing failed for '{query}': {e}")
    return []

def get_best_image(query, fallbacks=[]):
    print(f"Searching for '{query}'...")
    products = parse_jumia_products(query)
    # Check if any product matches or contains keywords
    if products:
        # Use the first one
        print(f"  Found Jumia match: '{products[0][0]}' -> {products[0][1]}")
        return products[0][1]
    
    # Try fallbacks
    for fb in fallbacks:
        print(f"  No match. Trying fallback '{fb}'...")
        products = parse_jumia_products(fb)
        if products:
            print(f"    Found Jumia fallback match: '{products[0][0]}' -> {products[0][1]}")
            return products[0][1]
            
    return None

def download_image(url, dest_path):
    print(f"Downloading {url} to {dest_path}...")
    req = urllib.request.Request(url, headers=headers)
    try:
        os.makedirs(os.path.dirname(dest_path), exist_ok=True)
        with urllib.request.urlopen(req, timeout=15) as response:
            with open(dest_path, 'wb') as f:
                f.write(response.read())
        print(f"  Successfully downloaded to {dest_path}")
        return True
    except Exception as e:
        print(f"  Download failed: {e}")
        return False

# Mapping of all 46 products
product_mappings = {
    # Designer & General Perfumes
    "lattafa-asad.jpg": ("Lattafa Asad", ["Asad Perfume", "Lattafa"]),
    "armaf-cdn-intense.jpg": ("Armaf Club De Nuit Intense Men", ["Club De Nuit Men", "Armaf"]),
    "armaf-cdn-woman.jpg": ("Armaf Club De Nuit Woman", ["Club De Nuit Woman", "Armaf"]),
    "rasasi-hawas.jpg": ("Rasasi Hawas", ["Hawas", "Rasasi"]),
    "creed-aventus.jpg": ("Creed Aventus", ["Aventus Creed", "Creed"]),
    "dior-sauvage.jpg": ("Dior Sauvage", ["Sauvage Dior", "Dior"]),
    "tom-ford-oud-wood.jpg": ("Tom Ford Oud Wood", ["Oud Wood", "Tom Ford"]),
    "chanel-bleu.jpg": ("Bleu de Chanel", ["Chanel Bleu", "Chanel"]),
    "ysl-libre.jpg": ("YSL Libre", ["Libre YSL", "YSL"]),
    "good-girl-blush.jpg": ("Good Girl Blush", ["Good Girl Perfume", "Carolina Herrera"]),
    "nishane-100-silent.jpg": ("Nishane", ["Nishane Perfume"]),
    "moschino-toy-2.jpg": ("Toy 2 Moschino", ["Moschino Toy", "Moschino"]),
    "ck-euphoria.jpg": ("Calvin Klein Euphoria", ["Euphoria Perfume", "Calvin Klein"]),
    "lattafa-yara.jpg": ("Lattafa Yara", ["Yara Perfume", "Yara Pink"]),

    # Niche & Arabic Ouds
    "shaghaf-oud.jpg": ("Shaghaf Oud", ["Swiss Arabian Shaghaf Oud", "Swiss Arabian"]),
    "badee-al-oud-amethyst.jpg": ("Badee Al Oud Amethyst", ["Badee Al Oud", "Lattafa"]),
    "initio-oud-greatness.jpg": ("Initio Oud", ["Initio Perfume"]),
    "creed-royal-oud.jpg": ("Creed Royal Oud", ["Royal Oud Creed", "Creed"]),
    "mfk-oud-satin.jpg": ("Kurkdjian", ["Maison Francis Kurkdjian", "MFK"]),
    "tf-oud-wood-intense.jpg": ("Oud Wood Intense", ["Tom Ford Oud", "Oud Wood"]),
    "byredo-oud-immortel.jpg": ("Byredo", ["Byredo Perfume"]),
    "amouage-epic-man.jpg": ("Amouage", ["Amouage Perfume"]),
    "jm-oud-bergamot.jpg": ("Jo Malone", ["Jo Malone Cologne"]),
    "xerjoff-alexandria-ii.jpg": ("Xerjoff", ["Xerjoff Perfume"]),

    # Second list of Ouds (some are .png in products.ts)
    "kalemat-black.png": ("Kalemat", ["Arabian Oud", "Oud Perfume"]),
    "dahn-al-oudh.png": ("Dahn Al Oudh", ["Ajmal", "Oud Perfume"]),
    "la-yuqawam-ambergris.png": ("La Yuqawam", ["Rasasi", "Oud Perfume"]),
    "supremacy-oud.png": ("Supremacy Oud", ["Afnan", "Oud Perfume"]),
    "shaghaf-oud-aswad.png": ("Shaghaf Oud Aswad", ["Swiss Arabian", "Oud Perfume"]),
    "amber-oud-gold.png": ("Amber Oud Gold", ["Al Haramain", "Oud Perfume"]),
    "badee-al-oud-glory.png": ("Badee Al Oud", ["Lattafa", "Oud Perfume"]),

    # JS Atelier / Custom
    "oud-abeer.jpg": ("Oud Perfume", ["Arabian Perfume", "Lattafa"]),
    "oud-al-ameer.jpg": ("Oud Perfume", ["Arabian Perfume", "Rasasi"]),
    "aqua-collection.jpg": ("Fresh Perfume", ["Aqua Perfume", "Men Perfume"]),

    # Bukhoors (Incense)
    "bukhoor-afnan.jpg": ("Mamool", ["Bakhoor", "Incense"]),
    "bukhoor-jamila.jpg": ("Incense", ["Bakhoor", "Mamool"]),
    "afnan-al-dirham-bukhoor.jpg": ("Afnan Bukhoor", ["Bakhoor", "Mamool"]),
    "lattafa-teef-al-hub-bukhoor.jpg": ("Lattafa Bukhoor", ["Bakhoor", "Mamool"]),

    # Burners (Mabkharas)
    "traditional-mabkhara.jpg": ("Electric Burner", ["Incense Burner", "Bakhoor Burner"]),
    "custom-gold-burner.jpg": ("Bakhoor Burner", ["Incense Burner", "Electric Burner"]),

    # Sprays, Creams & Oils
    "lattafa-yara-room-spray.jpg": ("Yara Spray", ["Lattafa Spray", "Room Spray"]),
    "yara-room-spray.jpg": ("Yara Mist", ["Yara Spray", "Room Spray"]),
    "oud-rose-linen-spray.jpg": ("Linen Spray", ["Room Spray", "Air Freshener"]),
    "khadlaj-air-freshener.jpg": ("Khadlaj", ["Air Freshener", "Room Spray"]),
    "yara-body-cream.jpg": ("Yara Cream", ["Body Cream", "Body Lotion"]),
    "musk-silk-cream.jpg": ("Musk Silk", ["Body Cream", "Body Lotion"]),
    "musk-abiyad-oil.jpg": ("Afnan Musk", ["White Musk", "Perfume Oil"]),
    "golden-sand-attar.jpg": ("Golden Sand", ["Perfume Oil", "Attar"]),
    "asad-car-fragrance.jpg": ("Car Diffuser", ["Car Perfume", "Car Fragrance"]),
    "oud-car-diffuser.jpg": ("Car Diffuser", ["Car Perfume", "Car Fragrance"]),

    # Gifts
    "luxury-gift-set.jpg": ("Perfume Gift Set", ["Gift Set", "Perfume Set"]),
    "eid-mubarak-gift-box.jpg": ("Perfume Gift Set", ["Gift Set", "Perfume Box"]),
    "royal-wedding-set.jpg": ("Perfume Gift Set", ["Gift Set", "Couples Perfume"]),
    "gift-voucher.jpg": ("Gift Card", ["Gift Voucher", "Gift Box"])
}

# Categories images mapping
category_mappings = {
    "cat-men.jpg": ("Men Perfume", ["Men Fragrance"]),
    "cat-women.jpg": ("Women Perfume", ["Women Fragrance"]),
    "cat-niche.jpg": ("Niche Perfume", ["Luxury Perfume"]),
    "bukhoors.jpg": ("Bakhoor", ["Incense"]),
    "incense-burners.jpg": ("Bakhoor Burner", ["Incense Burner"]),
    "perfume-oils.jpg": ("Perfume Oil", ["White Musk"]),
    "air-fresheners.jpg": ("Air Freshener", ["Room Spray"]),
    "room-sprays.jpg": ("Room Spray", ["Air Freshener"]),
    "linen-sprays.jpg": ("Linen Spray", ["Room Spray"]),
    "car-fragrances.jpg": ("Car Diffuser", ["Car Perfume"]),
    "creams.jpg": ("Body Cream", ["Body Lotion"]),
    "home-fragrance.jpg": ("Scented Candle", ["Reed Diffuser"])
}

# Unsplash Curated High-Quality Luxury Perfume Banners
unsplash_lifestyle = {
    "about-store-interior.png": "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=1200",
    "hero-1.jpg": "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1200",
    "hero-2.jpg": "https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=1200",
    "hero-3.jpg": "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=1200",
}

PUBLIC_DIR = "/home/abdikhafar/Documents/js-perfumes-kenya-luxury-fragrances/public"

def run_downloader():
    # 1. Download products
    print("=== DOWNLOADING PRODUCTS ===")
    for filename, (q, fallbacks) in product_mappings.items():
        dest = os.path.join(PUBLIC_DIR, "products", filename)
        img_url = get_best_image(q, fallbacks)
        if img_url:
            download_image(img_url, dest)
            time.sleep(1) # Be polite
        else:
            print(f"WARNING: Could not find image for product '{filename}'")

    # 2. Download categories
    print("\n=== DOWNLOADING CATEGORIES ===")
    for filename, (q, fallbacks) in category_mappings.items():
        dest = os.path.join(PUBLIC_DIR, "categories", filename)
        img_url = get_best_image(q, fallbacks)
        if img_url:
            download_image(img_url, dest)
            time.sleep(1)
        else:
            print(f"WARNING: Could not find image for category '{filename}'")

    # 3. Download lifestyle / heroes
    print("\n=== DOWNLOADING LIFESTYLE & HEROES ===")
    for filename, url in unsplash_lifestyle.items():
        dest = os.path.join(PUBLIC_DIR, "lifestyle", filename)
        download_image(url, dest)

if __name__ == "__main__":
    run_downloader()
