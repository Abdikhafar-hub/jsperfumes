with open("/home/abdikhafar/Documents/js-perfumes-kenya-luxury-fragrances/.gemini/antigravity/brain/83bc29a8-0f31-47be-b933-6c994b2015a6/scratch/bing.html", "r") as f:
    html = f.read()

print("HTML length:", len(html))
print("First 1000 characters:")
print(html[:1000])

for keyword in ["cookie", "consent", "cookie-consent", "agree", "accept", "privacy"]:
    if keyword in html.lower():
        print(f"Keyword '{keyword}' found!")
