from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool

from destaques.background_image.models import ContainerBackground

class ContainerBackgroundImagePlugin(CMSPluginBase):
    model = ContainerBackground
    name = "Apply background to container"
    render_template = "background_image/apply_background.html"

    def render(self, context, instance, placeholder):
        context.update({
            'object': instance,
        })
        return context

plugin_pool.register_plugin(ContainerBackgroundImagePlugin)
