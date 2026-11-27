from django.shortcuts import get_object_or_404
from rest_framework import generics, serializers
from rest_framework.permissions import IsAuthenticated
from .models import Product, Category, product_status_choice, Wishlist
from .serializers import ProductSerializer, CategorySerializer, WishlistSerializer

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


class WishListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = WishlistSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.request.user.wishlist.all()

    def perform_create(self, serializer):
        user = self.request.user
        product = serializer.validated_data["product"]

        if Wishlist.objects.filter(user=user, product=product).exists():
            raise serializers.ValidationError({"detail":"Item is already on wishlist."})
        serializer.save(user=user)


class RemoveFromWishlistAPIView(generics.DestroyAPIView):
    serializer_class = WishlistSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        user = self.request.user
        product_id = self.kwargs.get("product_id")
        wishlist_item = get_object_or_404(Wishlist, user=user, product__id=product_id)
        return wishlist_item