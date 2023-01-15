import random

class randomPath:
    def __init__(self):
        s = "abcdefghijklmnopqrstuvwxyz0123456789"
    
    def getRandomPath(self):
        s = "abcdefghijklmnopqrstuvwxyz0123456789"
        res = ""
        for i in range(8):
            r = random.randrange(0,len(s)-1)
            res = res + s[r]
        return res