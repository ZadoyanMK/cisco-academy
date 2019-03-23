from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers

from .views import PostViewSet, SendMessageView, CourseViewSet


urlpatterns = [
    url(r'^send-message/$', SendMessageView.as_view(), name='api-send-message')
]

router = routers.DefaultRouter()
router.register('api/posts', PostViewSet, 'posts-api')
router.register('api/courses', CourseViewSet, 'courses-api')

urlpatterns += router.urls
