from rest_framework import routers

from .views import (
    BloodStoreViewSet,
    BloodRequestViewSet,
    BloodTakingViewSet
)

router = routers.DefaultRouter()
router.register('blood-store', BloodStoreViewSet)
router.register('blood-request', BloodRequestViewSet)
router.register('blood-taking', BloodTakingViewSet)
urlpatterns = router.urls