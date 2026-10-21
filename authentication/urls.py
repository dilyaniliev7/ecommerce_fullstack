from django.urls import path
from .views import ForceTokenRefreshAPIView, CustomTokenObtainPairView, RegisterAPIView
from rest_framework_simplejwt.views import TokenRefreshView

app_name = "authentication"
urlpatterns = [
    path("token/", CustomTokenObtainPairView.as_view(), name="obtain-token-pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="refresh-token"),
    path("token/force-refresh", ForceTokenRefreshAPIView.as_view(), name="force-token-refresh"),
    path("register/", RegisterAPIView.as_view(), name="register"),
]