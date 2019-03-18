from django import forms
from .models import *
from django.contrib.auth.models import User

# from django.contrib.auth.models import

# from .tasks import message_creating, message_creating_with_new_user


class PostModelForm(forms.ModelForm):

    class Meta:
        model = Post
        fields = [
            'description',
            'name',
            'main_image',
        ]

    def save(self, request, commit=True):
        post = super(PostModelForm, self).save(commit=False)

        if request.user.is_authenticated:
            post.creator_name = f"{request.user.first_name} {request.user.last_name}({request.user.username})"
        else:
            post.creator_name = "No user"

        # post_main_img = PostsMainImage.objects.create(
        #     path="test",
        #     name=self.cleaned_data.get('main_image_name', ''),
        # )
        # post.main_image = post_main_img
        if commit:
            post.save()
        return post
