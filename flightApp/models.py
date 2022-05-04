from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from django.conf import settings

# Create your models here.
#!Flight
class Flight(models.Model):
    flightNumber = models.CharField(max_length=30)
    operatingAirlines = models.CharField(max_length=30)
    departureCity = models.CharField(max_length=30,blank=True,null=True)
    arrivalCity = models.CharField(max_length=30)
    dateofDeparture = models.DateField()
    estimatedTimeOfDeparture = models.TimeField()
    
    def __str__(self):
        return "{}-{}".format(str(self.operatingAirlines),str(self.flightNumber))

#!Passenger
class Passenger(models.Model):
    firstName = models.CharField(max_length=30)
    lastName = models.CharField(max_length=30)
    middleName = models.CharField(max_length=30)
    email = models.CharField(max_length=30)
    phone = models.CharField(max_length=30)
    
    def __str__(self):
        return "{}-{}".format(str(self.firstName),str(self.lastName))

#!Reservation
class Reservation(models.Model):
    flight = models.ForeignKey(Flight,on_delete=models.CASCADE)
    passsenger = models.OneToOneField(Passenger,on_delete=models.CASCADE)
    
    def __str__(self):
        return f"{self.flight}-{self.passsenger}"
    

@receiver(post_save,sender=settings.AUTH_USER_MODEL)
def authTokenView(sender,instance,created,**kwargs):
    if created:
        Token.objects.create(user=instance)
