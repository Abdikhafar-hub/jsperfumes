with open("/home/abdikhafar/Documents/js-perfumes-kenya-luxury-fragrances/.gemini/antigravity/brain/83bc29a8-0f31-47be-b933-6c994b2015a6/scratch/google.html", "r") as f:
    html = f.read()

print("Length of HTML:", len(html))
print("First 1000 characters:")
print(html[:1000])

print("\nLast 500 characters:")
print(html[-500:])

# Check if CAPTCHA or Google logo or similar is present
for keyword in ["captcha", "robot", "consent", "cookie", "sorry", "detected", "unusual"]:
    if keyword in html.lower():
        print(f"Keyword '{keyword}' found in HTML!")
