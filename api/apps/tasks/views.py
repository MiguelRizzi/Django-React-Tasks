from rest_framework import viewsets
from .serializer import TasksSerializer
from .models import Tasks

# Create your views here.
class TasksViewSet(viewsets.ModelViewSet):
    queryset = Tasks.objects.all()
    serializer_class = TasksSerializer