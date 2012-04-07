from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool

from history_events.models import HistoryEvent

class HistoryEventPlugin(CMSPluginBase):
    model = HistoryEvent
    name = "History event"
    render_template = "history_events/next_events.html"

    def render(self, context, instance, placeholder):
        context.update({
            'object': instance,
            #'next_events': HistoryEvent.objects.filter(id_lt=instance.id).all()[:6]
        })
        return context

plugin_pool.register_plugin(HistoryEventPlugin)
