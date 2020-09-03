from django.contrib import admin
from .models import BloodStore, BloodRequest, BloodTaking
# Register your models here.
admin.site.register(BloodStore)
admin.site.register(BloodRequest)
admin.site.register(BloodTaking)