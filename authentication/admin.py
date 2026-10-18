from django.contrib import admin
from .models import User

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ["id", "full_name" ,"email",  "username", "is_active"]
    readonly_fields = ["id", "password", "date_joined", "last_login"]

    fields = ["id", "full_name" ,"email",  "username", "is_active", "is_staff", "is_superuser", "password", "date_joined", "last_login", "user_permissions", "groups"]
    filter_horizontal = ["user_permissions", "groups"]