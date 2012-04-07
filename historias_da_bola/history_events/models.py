from django.db import models
from cms.models import CMSPlugin

class EventType(models.Model):
    image = models.ImageField(upload_to="event_types")
    title = models.CharField(max_length=128)

    class Meta:
        ordering = ['title']

    def __unicode__(self):
        return self.title

class HistoryEvent(CMSPlugin):
    year = models.PositiveSmallIntegerField()
    event_type = models.ForeignKey(EventType)
    title = models.CharField(max_length=255)
    subtitle = models.CharField(max_length=255)

    class Meta:
        ordering = ['id']

    def __unicode__(self):
        return self.title
