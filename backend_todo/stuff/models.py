from django.db import models

class Task(models.Model):
    title = models.CharField(max_length=150)
    subject = models.CharField(max_length=150)
    detail = models.TextField()
    done = models.BooleanField(default=False)

    def __str__(self):
        return self.title
    