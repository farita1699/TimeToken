from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User, NFT

from pomodoro.mint import mintNFT

class MinterView(View):

    def get(self, request, *args, **kwargs):
        
        return HttpResponse(mintNFT())

class PostNFT(APIView):
    def post(self, request):
        path = request.data['path']
        passed_username = request.data['username']

        user = User.objects.get(username=passed_username)
        new_nft = NFT.objects.create(user=user)
        new_nft.path = path
        new_nft.save()

        return Response({'success': True})

class getNFT(APIView):
    def post(self, request):
        username = request.data['username']
        user = User.objects.get(username=username)
        all_nfts = user.nfts.all()
        list_nft_paths = []

        for nft in all_nfts:
            list_nft_paths.append(nft.path)

        return Response({'success': True, 'nfts': list_nft_paths})



