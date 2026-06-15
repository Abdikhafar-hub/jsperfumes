import re

with open("/home/abdikhafar/Documents/js-perfumes-kenya-luxury-fragrances/.gemini/antigravity/brain/83bc29a8-0f31-47be-b933-6c994b2015a6/scratch/bing_en.html", "r") as f:
    html = f.read()

urls = re.findall(r'(https?://[^\s"\'<>&]+?\.(?:jpg|png|webp|jpeg))', html)
print("Found image-like URLs:", len(urls))
for u in urls[:10]:
    print(u)
