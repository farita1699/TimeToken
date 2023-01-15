from django.db import models

# Create your models here.
class User(models.Model): 
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100, default='123')
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    birthday = models.CharField(max_length=100)
    github = models.CharField(max_length=100)
    linkedin = models.CharField(max_length=100)
    wallet = models.CharField(max_length=100)

    def __str__(self):
        return self.username

class NFT(models.Model):
    path = models.CharField(max_length=100)
    user = models.ForeignKey(User, related_name="nfts", on_delete=models.CASCADE)

    def __str__(self):
        return self.path