from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=12)
    description = models.TextField()
    city = models.CharField(max_length=3)
    address = models.CharField(max_length=20)


class Vacancy(models.Model):
    name = models.CharField(max_length=30)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

