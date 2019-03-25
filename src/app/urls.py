from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers

from .views import PostViewSet, SendMessageView, CourseViewSet


urlpatterns = [
    url(r'^send-message/$', SendMessageView.as_view(), name='api-send-message')
]

router = routers.DefaultRouter()
router.register(r'api/(?P<lang>[a-z]{2})/posts', PostViewSet, 'posts-api')
router.register(r'api/(?P<lang>[a-z]{2})/courses', CourseViewSet, 'courses-api')

urlpatterns += router.urls
