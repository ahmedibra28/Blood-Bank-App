from .models import BloodStore, BloodRequest, BloodTaking
from rest_framework import viewsets, permissions
from .serializers import BloodStoreSerializer, BloodRequestSerializer, BloodTakingSerializer
from rest_framework import generics
from django_filters import rest_framework as filters
from accounts.models import CustomUser


class BloodStoreViewSet(viewsets.ModelViewSet):
    queryset = BloodStore.objects.all().order_by('-created_at')
    serializer_class = BloodStoreSerializer
    # permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user.id)

    def perform_update(self, serializer):
        serializer.save(updated_by=self.request.user.id)


class BloodRequestViewSet(viewsets.ModelViewSet):
    queryset = BloodRequest.objects.all().order_by('-created_at')
    serializer_class = BloodRequestSerializer
    # permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user.id)

    def perform_update(self, serializer):
        serializer.save(updated_by=self.request.user.id)


class BloodTakingViewSet(viewsets.ModelViewSet):
    queryset = BloodTaking.objects.all().order_by('-created_at')
    serializer_class = BloodTakingSerializer
    # permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user.id)

    def perform_update(self, serializer):
        serializer.save(updated_by=self.request.user.id)
