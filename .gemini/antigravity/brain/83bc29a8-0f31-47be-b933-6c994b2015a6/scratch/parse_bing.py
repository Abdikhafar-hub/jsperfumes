import re
import json
import html

with open("/home/abdikhafar/Documents/js-perfumes-kenya-luxury-fragrances/.gemini/antigravity/brain/83bc29a8-0f31-47be-b933-6c994b2015a6/scratch/bing.html", "r") as f:
    content = f.read()

# Let's find matches of class="iusc" which contains image metadata
# Example: <a class="iusc" ... m="json_string" ...>
matches = re.findall(r'class="iusc"[^>]+m="([^"]+)"', content)
print("Found iusc matches:", len(matches))

urls = []
for m in matches:
    try:
        # Decode HTML entities (like &quot;)
        decoded = html.unescape(m)
        data = json.loads(decoded)
        murl = data.get("murl")
        if murl:
            urls.append(murl)
    except Exception as e:
        pass

print("Parsed URLs:", len(urls))
for u in urls[:10]:
    print(u)
