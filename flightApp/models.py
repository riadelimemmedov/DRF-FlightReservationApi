from django.db import models

# Create your models here.
#!Flight
class Flight(models.Model):
    flightNumber = models.CharField(max_length=30)
    operatingAirlines = models.CharField(max_length=30)
    departureCity = models.CharField(max_length=30)
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