import urllib.request
import urllib.parse
import re
import json

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

def search_yahoo_image(query):
    url = "https://images.search.yahoo.com/search/images?p=" + urllib.parse.quote(query)
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            html = response.read().decode('utf-8', errors='ignore')
            # Yahoo images are stored in a script tag or JSON object
            # Let's find images ending in .jpg or .png
            urls = re.findall(r'"imgurl":"(https?://[^"]+?\.(?:jpg|png|jpeg))"', html)
            if urls:
                return [u.replace('\\/', '/') for u in urls]
    except Exception as e:
        print(f"Yahoo search failed for '{query}': {e}")
    return []

# Test with a few queries
queries = [
    "Carolina Herrera Good Girl Blush 80ml",
    "Nishane Hundred Silent Ways",
    "Maison Francis Kurkdjian Oud Satin Mood",
    "Traditional Arabic Mabkhara",
    "Bukhoor Afnan"
]

for q in queries:
    print(f"Search: {q}")
    results = search_yahoo_image(q)
    if results:
        print(f"  Found {len(results)} images. Top 3:")
        for r in results[:3]:
            print(f"    - {r}")
    else:
        print("  No images found.")
