from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import CustomUser

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email')

# create user serializer
class UserRegistrationSerialzer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email', 'password', 'confirm_password')
        extra_kwargs = {'password': {'write_only': True}}

        def validate(self, attrs):
            if attrs['password'] != attrs['confirm_password']:
                raise serializers.ValidationError('Passwords do not match')

            password = attrs.get('password', '')
            if len(password) < 8:
                raise serializers.ValidationError('Password must be atleast 8 characters!')
            
            return attrs

        def create(self, validated_data):
            password = validated_data.pop('password')
            validated_data.pop('confirm_password')

            return CustomUser.objects.create_user(password=password, **validated_data)

# create login serializer
class UserLoginSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError('Incorrect credentials')