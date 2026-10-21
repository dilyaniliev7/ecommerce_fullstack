import uuid, re
from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    full_name = models.CharField(
        max_length=255,
        blank=True
    )
    avatar = models.FileField(
        upload_to="profile",
        null=True,
        blank=True,
        default="/default-avatar.png"
    )
    username = models.CharField(
        max_length=30,
        unique=True,
    )
    email = models.EmailField(unique=True)

    USERNAME_FIELD = "email"

    REQUIRED_FIELDS = ["username"]

    def __str__(self):
        return str(object=self.email)

    def save(self, *args, **kwargs) -> None:
        if not self.full_name:
            base_name = self.email.split("@")[0].strip()
            clean_name = re.sub(r"[^a-ZA-Z]", "-", base_name).strip("-").lower()
            self.full_name = clean_name

        if not self.avatar:
            self.avatar = "/default-avatar.png"
        return super().save(*args, **kwargs)