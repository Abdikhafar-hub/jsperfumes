import urllib.request
import urllib.parse
import re

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
        print(f"Jumia parsing failed: {e}")
    return []

for q in ["Bakhoor Burner", "Incense Burner", "Mabkhara", "Arabic Perfume"]:
    print(f"\n--- {q} ---")
    for t, img in parse_jumia_products(q)[:6]:
        print(f"  {t} -> {img}")
