from django.db import models
from cms.models import CMSPlugin

FONTS_AVAILABLE = (
    ('Arial', 'Arial'),
    ('Helvetica', 'Helvetica'),
    ('Times New Roman', 'Times New Roman'),
    ('Antic Slab', 'Antic Slab'),
)

FONT_WEIGHT_CHOICES = (
    ('normal', 'Normal'),
    ('bold', 'Bold'),
    ('italic', 'Italic'),
)

class BoxText(CMSPlugin):
    title = models.CharField(max_length=140)

class TextBox(models.Model):
    box = models.ForeignKey(BoxText)
    text = models.CharField(max_length=255)
    font = models.CharField(max_length=150, choices=FONTS_AVAILABLE)
    font_weight = models.CharField(max_length=50, choices=FONT_WEIGHT_CHOICES)
    size = models.PositiveSmallIntegerField()
    top = models.PositiveSmallIntegerField()
    left = models.PositiveSmallIntegerField()

