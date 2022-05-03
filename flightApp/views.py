from django.shortcuts import render
from rest_framework import status,viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from .serializers import *
# Create your views here.

@api_view(['POST'])
def findFlightsView(request):
    flights = Flight.objects.filter(departureCity=request.data['departureCity'],arrivalCity=request.data['arrivalCity'],dateofDeparture=request.data['dateofDeparture'])
    serializer = FlightSerializers(flights,many=True)
    return Response(serializer.data)


#!?This function tested => Postman
@api_view(['POST'])
def save_reservation(request):
    flight = Flight.objects.get(id=request.data['flightId'])
    
    passenger = Passenger()
    passenger.firstName = request.data['firstName']
    passenger.lastName = request.data['lastName']
    passenger.middleName = request.data['middleName']
    passenger.email = request.data['email']
    passenger.phone = request.data['phone']
    passenger.save()
    
    reservation = Reservation()
    reservation.flight = flight
    reservation.passsenger = passenger
    
    reservation.save()#or save this method => Reservation.save(reservation)
    return Response(status=status.HTTP_201_CREATED)

class FlightViewSet(viewsets.ModelViewSet):
    queryset = Flight.objects.all()
    serializer_class = FlightSerializers
class PassengerViewSet(viewsets.ModelViewSet):  
    queryset = Passenger.objects.all()
    serializer_class = PassengerSerializers
    
class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializers
