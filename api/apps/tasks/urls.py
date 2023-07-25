from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from .views import TasksViewSet

router=routers.DefaultRouter()
router.register(r'tasks',TasksViewSet, 'tasks')

urlpatterns = [
    path("api/", include(router.urls)),
    path("docs/", include_docs_urls(title="Tasks API")),
]