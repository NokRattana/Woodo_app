from . import views
from django.urls import path, include
from rest_framework import routers

router = routers.DefaultRouter()
router.register('task', views.TaskView)

urlpatterns = [
    path('', views.home, name='home'),
    path('delete/<task_id>/', views.delete, name='delete'),
 
    
    path('task/', include(router.urls)),
    
]
