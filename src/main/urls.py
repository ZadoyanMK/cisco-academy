from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include

from django.conf import settings
from django.views.static import serve

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^', include('posts.urls')),
    url(r'^upload/(?P<path>.*)$', serve, {
            'document_root': settings.MEDIA_ROOT
    })
]

# if settings.DEBUG:
#     urlpatterns += [
#         url(r'^upload/(?P<path>.*)$', serve, {
#             'document_root': settings.MEDIA_ROOT
#         })
#     ]
#
# from django.conf import settings
#
#
# if settings.DEBUG:
#     import debug_toolbar
#     urlpatterns = [
#         path('_dev/', include(debug_toolbar.urls)),
#
#         # For django versions before 2.0:
#         # url(r'^__debug__/', include(debug_toolbar.urls)),
#
#     ] + urlpatterns
