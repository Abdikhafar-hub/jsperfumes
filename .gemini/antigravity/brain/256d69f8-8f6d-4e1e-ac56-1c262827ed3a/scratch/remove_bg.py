from PIL import Image
import os

def make_transparent(img_path, output_paths):
    if not os.path.exists(img_path):
        print(f"Error: {img_path} does not exist.")
        return
    
    img = Image.open(img_path)
    img = img.convert("RGBA")
    
    datas = img.getdata()
    newData = []
    
    for item in datas:
        # If pixel is white or very close to white, make it transparent
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    
    # Crop the image to the bounding box of the non-transparent pixels to remove empty space around it
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    for out_path in output_paths:
        img.save(out_path, "PNG")
        print(f"Saved transparent image to {out_path}")

if __name__ == "__main__":
    src_logo = "/home/abdikhafar/Documents/js-perfumes-kenya-luxury-fragrances/src/assets/jslogo.png"
    dest_paths = [
        "/home/abdikhafar/Documents/js-perfumes-kenya-luxury-fragrances/src/assets/jslogo.png",
        "/home/abdikhafar/Documents/js-perfumes-kenya-luxury-fragrances/public/favicon.png"
    ]
    make_transparent(src_logo, dest_paths)
