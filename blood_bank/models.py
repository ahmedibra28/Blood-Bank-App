from django.db import models


# Create your models here.
class BloodStore(models.Model):
    donor = models.CharField(max_length=100)
    hb = models.CharField(max_length=10)
    blood_group = models.CharField(max_length=5)
    blood_component = models.CharField(max_length=20)
    unit = models.CharField(max_length=10)
    bag = models.CharField(max_length=20)
    status_choices = [
        ('Stock', 'Stock'),
        ('Issued', 'Issued')
    ]
    status = models.CharField(
        choices=status_choices, default='Stock', max_length=7)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.CharField(max_length=2, blank=True, null=True)
    updated_by = models.CharField(max_length=2, blank=True, null=True)

    def __str__(self):
        return self.donor


class BloodRequest(models.Model):
    patient_id = models.CharField(max_length=10, unique=True)
    patient_name = models.CharField(max_length=100)
    blood_group = models.CharField(max_length=5)
    plasma = models.CharField(max_length=5, blank=True)
    platelet = models.CharField(max_length=5, blank=True)
    rbc = models.CharField(max_length=5, blank=True)
    whole_blood = models.CharField(max_length=5, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.CharField(max_length=2, blank=True, null=True)
    updated_by = models.CharField(max_length=2, blank=True, null=True)

    def __str__(self):
        return self.patient_id


class BloodTaking(models.Model):
    patient_id = models.ForeignKey(BloodRequest, on_delete=models.CASCADE)
    plasma = models.CharField(max_length=250, blank=True, null=True)
    platelet = models.CharField(max_length=250, blank=True, null=True)
    rbc = models.CharField(max_length=250, blank=True, null=True)
    whole_blood = models.CharField(max_length=250, blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.CharField(max_length=2, blank=True, null=True)
    updated_by = models.CharField(max_length=2, blank=True, null=True)

    def __str__(self):
        return self.patient_id.patient_id
