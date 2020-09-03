from rest_framework import serializers
from .models import BloodStore, BloodRequest, BloodTaking

class BloodStoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = BloodStore
        fields = '__all__'


class BloodRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = BloodRequest
        fields = '__all__'


class BloodTakingSerializer(serializers.ModelSerializer):
    class Meta:
        model = BloodTaking
        fields = '__all__'