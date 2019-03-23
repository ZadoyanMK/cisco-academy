from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField


class Post(models.Model):
    creator_name = models.CharField(max_length=128)
    name = models.CharField(max_length=128, default="")
    main_image = models.ImageField(upload_to='posts/%Y/%m/%d/', null=True, blank=True, max_length=512)
    on_banner = models.BooleanField(default=False)
    description = RichTextUploadingField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)


class Course(models.Model):
    name = models.CharField(max_length=128, default="")
    description = RichTextUploadingField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)