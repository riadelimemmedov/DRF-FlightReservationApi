from rest_framework import serializers
import re
from .models import *

#!First Validate method
def validateAllData(data):
    print(data)
    print('validateAllData ', data)
class FlightSerializers(serializers.ModelSerializer):
    class Meta:
        model = Flight
        fields = '__all__'
        validators = [validateAllData]
    
    #!Validation SECOND method
    def validate_flightNumber(self,data):#django is like method.Django have validate_ Instead clean_ 
        #print(data)
        if(re.match("^[a-zA-Z0-9]*$",data)==None):
            raise serializers.ValidationError('Invalid Flight Number.Make sure it is alpha numeric')
        #else
        return data
    
    #!Validation THIRD method
    def validate(self,data):
        print(data['operatingAirlines'])
        return data
class PassengerSerializers(serializers.ModelSerializer):
    class Meta:
        model = Passenger
        fields = '__all__'
        
class ReservationSerializers(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = '__all__'