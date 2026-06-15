import urllib.request
import urllib.parse
import re

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}
url = "https://www.google.com/search?q=" + urllib.parse.quote("Lattafa Asad site:fragrantica.com/perfume")
req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8', errors='ignore')
        urls = re.findall(r'href=["\'](https://www\.fragrantica\.com/perfume/[^"\']+)["\']', html)
        print("Found URLs:")
        for u in urls:
            print(u)
except Exception as e:
    print("Error:", e)
