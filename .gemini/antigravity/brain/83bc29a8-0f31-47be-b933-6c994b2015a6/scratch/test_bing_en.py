import urllib.request
import urllib.parse
import re

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}
# Add parameters to bypass country redirection and set language to English
url = "https://www.bing.com/images/search?q=" + urllib.parse.quote("Lattafa Asad 100ml") + "&setlang=en&cc=US&first=1"
req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8', errors='ignore')
        matches = re.findall(r'class="iusc"[^>]+m="([^"]+)"', html)
        print("Matches found:", len(matches))
        # Save html to verify if needed
        with open("/home/abdikhafar/Documents/js-perfumes-kenya-luxury-fragrances/.gemini/antigravity/brain/83bc29a8-0f31-47be-b933-6c994b2015a6/scratch/bing_en.html", "w") as f:
            f.write(html)
except Exception as e:
    print("Error:", e)
