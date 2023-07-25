from django.contrib import admin
from .models import Tasks
# Register your models here.
@admin.register(Tasks)
class TasksAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "description",
        "creation_date",
        "completed",
    )
    search_fields = ("title", "completed", "creation_date",)
    ordering = ("creation_date",)
    list_filter = ("completed", "creation_date",)
    