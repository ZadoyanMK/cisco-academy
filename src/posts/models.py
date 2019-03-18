from django.db import models


# class PostsMainImage(models.Model):
#     path = models.CharField(max_length=256)
#     name = models.CharField(max_length=256)


class Post(models.Model):
    creator_name = models.CharField(max_length=128)
    name = models.CharField(max_length=128, default="")
    description = models.TextField()
    main_image = models.ImageField(upload_to='main/%Y/%m/%d/', null=True, blank=True, max_length=512)
    on_banner = models.BooleanField(default=False)

    # models.ForeignKey(
    #     PostsMainImage,
    #     related_name='main_image_getter',
    #     on_delete=models.CASCADE
    # )
#
#
# class PostsImage(models.Model):
#     path = models.CharField(max_length=256)
#     name = models.CharField(max_length=256)
#     post_id = models.ForeignKey(
#         Post,
#         related_name='post_relation',
#         on_delete=models.CASCADE
#     )
