from .models import User, NFT
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User 
    fields = '__all__'

class NFTSerializer(serializers.ModelSerializer):
  class Meta:
    model = NFT 
    fields = '__all__'