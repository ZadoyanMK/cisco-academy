from django.contrib import admin
from .models import *


admin.site.register(Post)
admin.site.register(Course)

admin.site.site_header = 'Cisco Academy Admin Panel'
