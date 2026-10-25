from .models import User
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainSerializer
from django.contrib.auth.password_validation import validate_password

class UserModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "full_name", "username" ,"email", "avatar"]


class CustomTokenObtainPairSerializer(TokenObtainSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user=user)
        serializer = UserModelSerializer(user)
        token["id"] = serializer.data.get("id")
        token["full_name"] = serializer.data.get("full_name")
        token["avatar"] = serializer.data.get("avatar")
        token["username"] = serializer.data.get("username")
        token["email"] = serializer.data.get("email")

        return token


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)
    class Meta:
        model = User
        fields = ["full_name", "username", "email", "avatar", "password", "password2"]

    def validate(self, attrs):
        if attrs.get("password") != attrs.get("password2"):
            raise serializers.ValidationError(detail={"password":"Passwords do not match"})

        return super().validate(attrs=attrs)

    def create(self, validated_data):
        password = validate_data.pop("password")
        validated_data.pop("password2")

        user = User.objects.create(**validated_data)
        user.set_password(raw_password=password)
        user.save()

        return user


class ProfileSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ["full_name", "username", "email", "avatar", "password", "password2"]

    def validate(self, attrs):
        if attrs.get("password") != attrs.get("password2"):
            raise serializers.ValidationError(detail={"password": "Passwords do not match"})

        return super().validate(attrs=attrs)


    def update(self, instance, validated_data):
        password = validated_data.pop("password")
        validated_data.pop("password2")

        if password:
            instance.set_password(password)

        for attrs, value in validated_data.items():
            setattr(instance, attr, value)

        instance.save()

        return instance