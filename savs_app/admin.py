from django.contrib import admin
from .models import (
    AnonymousComplaint,
    IdentifiedComplaint,
    EnvolvedPerson,
)

# admin.site.register(AnonymousComplaint)
admin.site.register(IdentifiedComplaint)
admin.site.register(EnvolvedPerson)


@admin.register(AnonymousComplaint)
class AnonComplaintAdmin(admin.ModelAdmin):
    date_hierarchy = "anonymous_created"
    search_fields = ('anonymous_gender',)
    list_per_page = 25
