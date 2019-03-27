from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include, handler404
from django.conf import settings
from django.views.static import serve
from frontend import views
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^404/$', views.index, name="index-view"),
    url(r'^', include('frontend.urls')),
    url(r'^', include('app.urls')),
    url(r'^upload/(?P<path>.*)$', serve, {
            'document_root': settings.MEDIA_ROOT
    }),
    url(r'^ckeditor/', include('ckeditor_uploader.urls')),
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)


handler404 = 'frontend.views.redirect_to_404'

# if settings.DEBUG:
#     urlpatterns += [
#         url(r'^upload/(?P<path>.*)$', serve, {
#             'document_root': settings.MEDIA_ROOT
#         })
#     ]

# if settings.DEBUG:
#     import debug_toolbar
#     urlpatterns = [
#         path('_dev/', include(debug_toolbar.urls)),

#         # For django versions before 2.0:
#         # url(r'^__debug__/', include(debug_toolbar.urls)),

#     ] + urlpatterns
