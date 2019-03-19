from django.contrib import admin
from .models import *

# Register your models here.


admin.site.register(Post)

admin.site.site_header = 'Cisco Academy Admin Panel'
# admin.site.index_template = 'admin/custom-index.html'
