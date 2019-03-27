from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.redirect_to_index, name="redirect-to-index"),
    url(r'^(?P<lang>[a-z]{2})/$', views.index, name="index-view"),
    url(r'^(?P<lang>[a-z]{2})/courses/$', views.index, name="index-view"),
    # url(r'^(?P<lang>[a-z]{2})/post/(?P<id>[0-9])/$', views.index, name="index-view"),
]
