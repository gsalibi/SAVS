from django.contrib import admin

# Register your models here.
from .models import (
    AnonymousComplaint,
    IdentifiedComplaint,
    EnvolvedPerson,
)

admin.site.register(AnonymousComplaint)
admin.site.register(IdentifiedComplaint)
admin.site.register(EnvolvedPerson)
