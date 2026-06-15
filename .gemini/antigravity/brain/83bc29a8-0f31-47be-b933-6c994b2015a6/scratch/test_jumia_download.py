import urllib.request

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}
url = "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/13/2128213/1.jpg"
req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req) as response:
        content = response.read()
        target_path = "/home/abdikhafar/Documents/js-perfumes-kenya-luxury-fragrances/public/products/lattafa-asad-jumia.jpg"
        with open(target_path, "wb") as f:
            f.write(content)
        print("Downloaded successfully! Size:", len(content))
except Exception as e:
    print("Download error:", e)
