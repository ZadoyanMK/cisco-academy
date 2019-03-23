from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.index, name="index-view"),
    url(r'^courses/$', views.index, name="index-view"),
    url(r'^post/(?P<id>[0-9])/$', views.index, name="index-view"),
    url(r'^404/$', views.index, name="index-view"),
]
