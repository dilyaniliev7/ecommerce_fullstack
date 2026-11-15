from rest_framework import generics
from .models import Product, Category, product_status_choice
from .serializers import ProductSerializer, CategorySerializer

class CategoryListAPIView(generics.ListAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.filter(active=True)


class ProductListAPIView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        category = self.request.GET.get("category", None)
        featured = self.request.GET.get("featured", None)
        if category:
            products = Product.objects.filter(status=product_status_choice.published, category__slug=category)
        else:
            products = Product.objects.filter(status=product_status_choice.published)

        if featured:
            products = products.filter(featured=True)


        return products.order_by("-data")


class ProductRetrieveAPIView(generics.RetrieveAPIView):
    serializer_class = ProductSerializer
    lookup_field = "slug"
    queryset = Product.objects.filter(status=product_status_choice.published)