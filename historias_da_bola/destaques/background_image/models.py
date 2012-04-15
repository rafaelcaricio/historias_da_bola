from django.db import models
from cms.models import CMSPlugin

class ContainerBackground(CMSPlugin):
    title = models.CharField(max_length=140)
    background_image = models.ImageField(upload_to='background_images')
    left = models.PositiveSmallIntegerField(default=0)
    top = models.PositiveSmallIntegerField(default=0)

