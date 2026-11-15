from django.urls import path
from . import views

app_name = "products"

urlpatterns = [
    path("", views.ProductListAPIView.as_view()),
    path("categories/", views.CategoryListAPIView.as_view()),
    path("<str:slug>/", views.ProductRetrieveAPIView.as_view()),
]