import urllib.request
import re

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}
url = "https://www.fragrantica.com/perfume/Lattafa-Perfumes/Asad-69450.html"
req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8', errors='ignore')
        # Search for img tags with fimgs.net
        images = re.findall(r'src=["\'](https://fimgs\.net/mdimg/perfume/[^"\']+)["\']', html)
        print("Found fimgs.net images:")
        for img in images:
            print(img)
except Exception as e:
    print("Error:", e)
