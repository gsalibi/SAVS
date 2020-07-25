from django.contrib import admin
from django.db.models import Count, Sum, Min, Max, DateTimeField
from django.db.models.functions import Trunc

# Register your models here.
from .models import (
    AnonymousComplaint,
    IdentifiedComplaint,
    EnvolvedPerson,
    AnonComplainSummary,
)


def get_next_in_date_hierarchy(request, date_hierarchy):
    if date_hierarchy + "__day" in request.GET:
        return "hour"
    if date_hierarchy + "__month" in request.GET:
        return "day"
    if date_hierarchy + "__year" in request.GET:
        return "week"
    return "month"


class IdentifiedComplaintAdmin(admin.ModelAdmin):
    list_display = (
        "identified_name",
        "identified_current_status",
        "identified_created",
        "identified_updated_at",
        "identified_position",
        "identified_gender",
        "identified_race",
        "identified_email",
    )


class AnonymousComplaintAdmin(admin.ModelAdmin):
    list_display = (
        "anonymous_created",
        "anonymous_current_status",
        "anonymous_updated_at",
        "anonymous_gender",
        "anonymous_race",
        "anonymous_connection_unicamp",
        "anonymous_support_requested",
    )


@admin.register(AnonComplainSummary)
class AnonComplainAdmin(admin.ModelAdmin):
    change_list_template = "admin/anon_complains.html"
    date_hierarchy = "anonymous_created"

    def changelist_view(self, request, extra_context=None):
        response = super().changelist_view(request, extra_context=extra_context,)

        period = get_next_in_date_hierarchy(request, self.date_hierarchy,)

        response.context_data["period"] = period

        try:
            qs = response.context_data["cl"].queryset
        except (AttributeError, KeyError):
            return response

        metrics = {
            "total_genero": Count("anonymous_gender"),
        }

        response.context_data["summary"] = list(
            qs.values("anonymous_created").annotate(**metrics)
        )
        response.context_data["summary_total"] = dict(qs.aggregate(**metrics))

        # Chart

        summary_over_time = (
            qs.annotate(
                period=Trunc(
                    "anonymous_created", period, output_field=DateTimeField(),
                ),
            )
            .values("period")
            .annotate(total=Count("anonymous_position"))
            .order_by("period")
        )

        summary_range = summary_over_time.aggregate(
            low=Min("total"), high=Max("total"),
        )
        high = summary_range.get("high", 0)
        low = summary_range.get("low", 0)

        response.context_data["summary_over_time"] = [
            {
                "period": x["period"],
                "total": x["total"] or 0,
                "pct": ((x["total"] or 0) - low) / (high - low) * 100
                if high > low
                else 0,
            }
            for x in summary_over_time
        ]

        return response

    list_filter = ("anonymous_position", "anonymous_gender")


admin.site.register(AnonymousComplaint, AnonymousComplaintAdmin)
admin.site.register(IdentifiedComplaint, IdentifiedComplaintAdmin)
admin.site.register(EnvolvedPerson)
