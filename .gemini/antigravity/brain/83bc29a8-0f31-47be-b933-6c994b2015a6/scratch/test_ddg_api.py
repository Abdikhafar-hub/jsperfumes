import urllib.request
import urllib.parse
import re
import json

def get_vqd(query):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    url = "https://duckduckgo.com/?q=" + urllib.parse.quote(query)
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8', errors='ignore')
            match = re.search(r'vqd=([0-9-]+)', html)
            if match:
                return match.group(1)
            # Try finding vqd in script tags
            match = re.search(r"vqd\s*=\s*['\"]([^'\"]+)['\"]", html)
            if match:
                return match.group(1)
    except Exception as e:
        print("vqd fetch error:", e)
    return None

def search_ddg_images(query):
    vqd = get_vqd(query)
    if not vqd:
        print("Could not get vqd for:", query)
        return []
    
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Referer': 'https://duckduckgo.com/'
    }
    
    # DDG image search endpoint
    url = f"https://duckduckgo.com/i.js?l=us-en&o=json&q={urllib.parse.quote(query)}&vqd={vqd}&f=,,,&p=1"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode('utf-8'))
            results = data.get('results', [])
            return [r.get('image') for r in results if r.get('image')]
    except Exception as e:
        print("Image search error:", e)
        return []

if __name__ == "__main__":
    query = "Lattafa Asad 100ml perfume bottle"
    print("Searching for:", query)
    urls = search_ddg_images(query)
    print("Found URLs:", len(urls))
    for u in urls[:5]:
        print(u)
