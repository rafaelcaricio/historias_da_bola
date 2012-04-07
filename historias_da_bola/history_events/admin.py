from django.contrib import admin
from history_events.models import EventType

class EventTypeAdmin(admin.ModelAdmin):
    pass

admin.site.register(EventType, EventTypeAdmin)
