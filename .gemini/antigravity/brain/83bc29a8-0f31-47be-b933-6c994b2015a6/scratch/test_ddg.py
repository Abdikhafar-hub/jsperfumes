import urllib.request
import urllib.parse
import re

headers = {
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

def search_ddg_image(query):
    # Try DuckDuckGo HTML search (web results first, then look for images or query direct image endpoint)
    # Actually DDG has a simple vqd token based image search:
    # 1. Fetch vqd token from https://duckduckgo.com/?q=query
    # 2. Fetch images from https://duckduckgo.com/d.js?q=query&vqd=token&f=,,,
    url = "https://duckduckgo.com/?q=" + urllib.parse.quote(query)
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            html = response.read().decode('utf-8', errors='ignore')
            # Look for vqd token
            vqd_match = re.search(r"vqd=([0-9-]+)&", html)
            if not vqd_match:
                vqd_match = re.search(r'vqd\s*=\s*[\'"]([0-9-]+)[\'"]', html)
            if vqd_match:
                vqd = vqd_match.group(1)
                img_url = f"https://duckduckgo.com/d.js?q={urllib.parse.quote(query)}&vqd={vqd}&s=0&o=json&api=d.js"
                req_img = urllib.request.Request(img_url, headers=headers)
                with urllib.request.urlopen(req_img, timeout=10) as img_resp:
                    content = img_resp.read().decode('utf-8', errors='ignore')
                    # Look for image URLs in the javascript response
                    urls = re.findall(r'"image"\s*:\s*"([^"]+)"', content)
                    if urls:
                        return [u.replace('\\/', '/') for u in urls]
    except Exception as e:
        print(f"DDG search failed for '{query}': {e}")
    return []

# Test DDG
queries = [
    "Carolina Herrera Good Girl Blush 80ml",
    "Nishane Hundred Silent Ways",
    "Maison Francis Kurkdjian Oud Satin Mood"
]

for q in queries:
    print(f"Search: {q}")
    results = search_ddg_image(q)
    if results:
        print(f"  Found {len(results)} images. Top 3:")
        for r in results[:3]:
            print(f"    - {r}")
    else:
        print("  No images found.")
