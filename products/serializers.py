from rest_framework import serializers
from .models import Product, Category, Gallery, Specification, Color, Variant

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = "__all__"

class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = "__all__"


class VariantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Variant
        fields = "__all__"


class SpecificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Specification
        fields = "__all__"

class ProductSerializer(serializers.ModelSerializer):

    category = CategorySerializer(read_only=True)
    gallery = GallerySerializer(read_only=True, many=True)
    specifications = SpecificationSerializer(read_only=True, many=True)
    colors = ColorSerializer(read_only=True, many=True)
    variants = VariantSerializer(read_only=True, many=True)

    class Meta:
        model = Product
        fields = "__all__"