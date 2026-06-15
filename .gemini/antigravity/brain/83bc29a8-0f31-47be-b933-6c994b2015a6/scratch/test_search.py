import urllib.request
import urllib.parse
import re

def try_google(query):
    # Google Images requires a User-Agent that it recognizes but doesn't trigger complex JS if we want the simple layout.
    # A slightly older browser User-Agent returns the simple static HTML version of Google Images.
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.134 Safari/537.36'
    }
    url = "https://www.google.com/search?q=" + urllib.parse.quote(query) + "&tbm=isch"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8', errors='ignore')
            # Google Images static page contains image urls like:
            # src="https://encrypted-tbn0.gstatic.com/images?q=tbn:..."
            urls = re.findall(r'src=["\'](https://encrypted-tbn0\.gstatic\.com/images\?q=tbn:[^"\']+)["\']', html)
            # Or actual larger image urls in metadata:
            # "ou":"http://..."
            ou_urls = re.findall(r'"ou"\s*:\s*"(http[^"]+)"', html)
            if not ou_urls:
                ou_urls = re.findall(r'imgurl=(http[^&]+)&amp;', html)
            return ou_urls if ou_urls else urls
    except Exception as e:
        print(f"Google error: {e}")
        return []

if __name__ == "__main__":
    query = "Lattafa Asad 100ml perfume"
    print("Testing Google...")
    res = try_google(query)
    print(f"Google found {len(res)} images:")
    for r in res[:10]:
        print(r)
