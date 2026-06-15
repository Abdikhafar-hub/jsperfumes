import urllib.request
import urllib.parse
import json

def search_qwant_images(query):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    url = f"https://api.qwant.com/v3/search/images?count=10&q={urllib.parse.quote(query)}&t=images&locale=en_US"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode('utf-8'))
            results = data.get('data', {}).get('result', {}).get('items', [])
            return [r.get('media') for r in results if r.get('media')]
    except Exception as e:
        print("Qwant error:", e)
        return []

if __name__ == "__main__":
    query = "Lattafa Asad 100ml perfume bottle"
    print("Searching Qwant for:", query)
    urls = search_qwant_images(query)
    print("Found URLs:", len(urls))
    for u in urls[:5]:
        print(u)
