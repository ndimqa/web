from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from api.serializers import ProductSerializer, CategorySerializer
from api.models import Product, Category


class ProductViewSet(viewsets.ModelViewSet):
   queryset = Product.objects.all()
   serializer_class = ProductSerializer


class CategoryViewSet(viewsets.ModelViewSet):
   queryset = Category.objects.all()
   serializer_class = CategorySerializer