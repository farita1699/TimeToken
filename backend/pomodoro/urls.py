from rest_framework import routers
from .api import UserViewSet, NFTViewSet

router = routers.DefaultRouter()
router.register('api/users', UserViewSet, 'users')
router.register('api/nfts', NFTViewSet, 'nfts')



urlpatterns = router.urls