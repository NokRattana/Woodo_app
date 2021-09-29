from django.shortcuts import render,redirect
from rest_framework import viewsets
from .serializers import TaskSerializer
from .models import Task
from .forms import TaskForm
from django.contrib import messages
from django.http import HttpResponseRedirect



def home(request):
    if request.method == 'POST':
        form = TaskForm(request.POST or None)

        if form.is_valid():
            form.save()
            all_title = Task.objects.all
            messages.success(request, ('New Task has been Added successfully!'))
            return render(request, 'home.html', {'all_title': all_title})

            
    else:
        all_title = Task.objects.all
        return render(request, 'home.html', {'all_title': all_title})


def delete(request, task_id):
    title = Task.objects.get(pk=task_id)
    title.delete()
    messages.success(request, ('Task has been deleted successfully!'))
    return redirect ('home')












def edit(request, task_id):
    if request.method == 'POST':
        form = TaskForm(request.POST or None)

        if form-is_valid():
            form.savr()
            all_titles = Task.objects.all
            messages.success(request, ('Task has been edit'))
            return render(request, 'edit.html', {'all_titles' : all_titles})

        else:
            all_titles = Task.objects.all
            return render(request, 'edit.html', {'all_titles': all_titles})






         

    




class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()

# Create your views here.
