import random
import requests
import image_gen

url = "https://api.verbwire.com/v1/nft/mint/quickMintFromFile"

def mintNFT():
    def getRandomPath():
        s = "abcdefghijklmnopqrstuvwxyz0123456789"
        res = ""
        for i in range(8):
            r = random.randrange(0,len(s)-1)
            res = res + s[r]
        return res

    rand_image_selector = random.randrange(0,3)
    name = "./assets/prize" + getRandomPath() + ".png"
    if rand_image_selector == 0:
        image_gen.save_image(image_gen.gen_img(), name)
    elif rand_image_selector == 1:
        image_gen.save_image(image_gen.gen_tree(), name)
    else:
        image_gen.save_image(image_gen.gen_bubbles(), name)

    files = {"filePath": (name, open(name, "rb"), "image/png")}
    payload = {
        "allowPlatformToOperateToken": "true",
        "chain": "goerli",
        "name": "Productive Grinder",
        "description": "hard working individual",
        "recipientAddress": "0x89066D1D77cf29c9F9ed3825961267C49381aCA8"
    }
    headers = {
        "accept": "application/json",
        "X-API-Key": "sk_live_5ada18b2-9939-489c-9037-1ecd29b5fce7"
    }
    print("checking")
    response = requests.post(url, data=payload, files=files, headers=headers)

    print(response.text)

    return name