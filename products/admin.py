from django.contrib import admin
from .models import Procut, Category, Gallery, Specification, Color, Variant

class GalleryInLine(admin.TabularInline):
    model = Gallery
    extra=0

class ColorInLine(admin.TabularInline):
    model = Color
    extra=0

class VariantInLine(admin.TabularInline):
    model = Variant
    extra=0


class SpecificationInLine(admin.TabularInline):
    model = Specification
    extra=0

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ["title", "active"]
    list_editable = ["active"]
    prepopulated_fields = {"slug": ["title"]}


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ["title", "category", "status", "price", "featured", "in_stock"]
    list_editable = ["status", "featured"]
    prepopulated_fields = {"slug": ["title"]}
    list_filter = ["category", "featured"]
    search_fields = ["title", "description"]
    readonly_fields = ["date"]
    inlines = [GalleryInLine, ColorInLine, SpecificationInLine, VariantInLine]