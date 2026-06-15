import urllib.request
import urllib.parse
import re

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}
query = "Lattafa Asad 100ml"
url = "https://www.jumia.co.ke/catalog/?q=" + urllib.parse.quote(query)
req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8', errors='ignore')
        # Look for images starting with https://ke.jumia.is/unsafe/fit-in/
        urls = re.findall(r'(https://ke\.jumia\.is/unsafe/fit-in/[^"\']+\.jpg)', html)
        print("Found Jumia URLs:", len(urls))
        for u in urls[:5]:
            print(u)
except Exception as e:
    print("Error:", e)
