import urllib.request
import os

LIFESTYLE_DIR = "/home/abdikhafar/Documents/js-perfumes-kenya-luxury-fragrances/public/lifestyle"
os.makedirs(LIFESTYLE_DIR, exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

def download_file(url, target_path):
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            content = response.read()
            with open(target_path, "wb") as f:
                f.write(content)
            print(f"Downloaded to {os.path.basename(target_path)} ({len(content)} bytes)")
            return True
    except Exception as e:
        print(f"Failed to download from {url}: {e}")
        return False

images = {
    "hero-1.jpg": "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1200",
    "hero-2.jpg": "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?w=1200",
    "hero-3.jpg": "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=1200",
    "about-store-interior.png": "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800"
}

for name, url in images.items():
    target = os.path.join(LIFESTYLE_DIR, name)
    download_file(url, target)
