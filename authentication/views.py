from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import UserModelSerializer, CustomTokenObtainPairSerializer, RegisterSerializer, ProfileSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import User


class ForceTokenRefreshAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        user = request.user
        refresh = CustomTokenObtainPairSerializer.get_token(user=user)
        return Response({"access":str(refresh.access_token), "refresh":str(refresh)})


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer
    permission_classes = [AllowAny]


class RegisterAPIView(generics.CreateAPIView):
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]
    queryset = User.objects.all()

