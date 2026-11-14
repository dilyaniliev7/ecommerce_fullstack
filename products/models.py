from django.db import models
from django.contrib.auth import get_user_model
from decimal import Decimal
from django.utils.text import slugify

User = get_user_model()

class Category(models.Model):
    title = models.CharField(max_length=128)
    image = models.FileField(upload_to="products/categories/", blank=True, null=True, default="/media/placeholder.png")
    active = models.BooleanField(default=True)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "Categories"
        ordering = ["title"]


class product_status_choice(models.TextChoices):
    drafted = "Drafted",
    disabled = "Disabled",
    published = "Published"


class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="products")
    title = models.CharField(max_length=256)
    description = models.TextField(blank=True)
    brand = models.CharField(max_length=128, blank=True)
    image = models.FileField(upload_to="product/", blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True, related_name="products")
    slug = models.SlugField(unique=True)
    price = models.DecimalField(max_digits=16, decimal_places=2, default=Decimal("0.00"))
    stock_quantity = models.PositiveIntegerField(default=1)
    rating = models.PositiveIntegerField(default=0)
    rating_count = models.PositiveIntegerField(default=0)

    status = models.CharField(choices=product_status_choice.choices, default=product_status_choice.published)

    featured = models.BooleanField(default=False)

    date = models.DateTimeField(auto_now_add=True)


    @property
    def in_stock(self):
        return self.stock_quantity > 0

    def __str__(self):
        return self.title


    def save(self, *args, **kwargs) -> None:
        if not self.slug:
            self.slug = slugify(self.title)

        return super().save(*args, **kwargs)


class Gallery(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    image = models.FileField(upload_to="products/gallery/", blank=True, null=True)

    def __str__(self):
        return self.product.title

    class Meta:
        verbose_name_plural = "Galleries"


class Specification(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    title = models.CharField(max_length=256)
    content = models.CharField(max_length=512)

    def __str__(self):
        return self.title


class Color(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    title = models.CharField(max_length=256)
    image = models.FileField(upload_to="products/colors/", blank=True, null=True)
    color_code = models.CharField(max_length=512)

    def __str__(self):
        return
        self.name



class Variant(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    name = models.CharField(max_length=256)
    price = models.DecimalField(max_digits=16, decimal_places=2, default=Decimal("0.00"))


    def __str__(self):
        return
        self.name