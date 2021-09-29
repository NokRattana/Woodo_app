from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TaskSerializer
from .models import Task
from .forms import TaskForm
from django.contrib import messages


def home(request):
    if request.method == 'POST':
        form = TaskForm(request.POST or None)

        if form.is_valid():
            form.save()
            all_title = Task.objects.all
            return render(request, 'home.html', {'all_title': all_title})

            
        else:
            all_items = Task.objects.all
            return render(request, 'home.html', {'all_title': all_title})

def about(request):
    context = {'name': 'Nok','last_name': 'Rattana'}
    return reder(request, 'about.html', context)


def delete(request, Tast_id):
    title = Task.objects.get(pk=task_id)
    title.delete()
    messages.success(request, ('Task has been deleted!'))
    return redirect ('home')

def task_done(request, task_id):
    item = Task.objects.get(pk=task_id)
    item.done = True
    item.save()
    return redirect('home')


def not_done(request, task_id):
    title = Task.objects.get(pk=task_id)
    title.done = False
    title.save()
    return redirect('home')

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
