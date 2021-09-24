from . import views
from django.urls import path, include
from rest_framework import routers

router = routers.DefaultRouter()
router.register('task', views.TaskView)

urlpatterns = [
    path('', include(router.urls)),
    
]
