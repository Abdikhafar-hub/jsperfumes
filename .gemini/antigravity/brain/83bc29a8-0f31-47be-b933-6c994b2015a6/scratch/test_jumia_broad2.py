import urllib.request
import urllib.parse
import re

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

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
         print(f"Jumia search failed: {e}")
    return None

queries = [
    "Incense Burner",
    "Bakhoor Burner",
    "Satin Mood",
    "Byredo",
    "Amouage",
    "Jo Malone",
    "Xerjoff",
    "Surrati Golden Sand",
    "Musk Abiyad"
]

for q in queries:
    img = search_jumia_image(q)
    print(f"Query: '{q}' -> Image: {img}")
