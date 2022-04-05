from django.urls import include, path

from rest_framework import routers

from api.views import ProductViewSet, CategoryViewSet

router = routers.DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'categories', CategoryViewSet)

urlpatterns = [
   path('', include(router.urls)),

]