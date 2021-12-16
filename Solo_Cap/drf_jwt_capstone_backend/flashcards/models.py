from django.db import models
from django.contrib.auth.models import User

class Flashcards(models.Model):
    front = models.CharField(max_length=500)
    back = models.CharField(max_length=500)
   

