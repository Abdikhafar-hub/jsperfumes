import re

with open("/home/abdikhafar/Documents/js-perfumes-kenya-luxury-fragrances/.gemini/antigravity/brain/83bc29a8-0f31-47be-b933-6c994b2015a6/scratch/google.html", "r") as f:
    html = f.read()

# Let's find matches of:
# 1. "https://encrypted-tbn0.gstatic.com/images?q=tbn:..."
tbns = re.findall(r'(https://encrypted-tbn0\.gstatic\.com/images\?q=tbn:[^"\'\s&]+)', html)
print("Encrypted TBN URLs:", len(tbns))
for t in tbns[:5]:
    print(t)

# 2. Or standard full-size image links
# Google images often stores them in json-like structures or attributes
# Let's look for any URLs ending in jpg/jpeg/png
img_urls = re.findall(r'(https?://[^"\'\s]+?\.(?:jpg|jpeg|png|webp))', html)
print("\nDirect image URLs found in HTML:", len(img_urls))
for u in img_urls[:10]:
    print(u)
