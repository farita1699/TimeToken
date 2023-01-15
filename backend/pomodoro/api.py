from .serializers import UserSerializer, NFTSerializer
from .models import User, NFT
from rest_framework import viewsets, permissions

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = UserSerializer

class NFTViewSet(viewsets.ModelViewSet):
    queryset = NFT.objects.all()
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = NFTSerializer