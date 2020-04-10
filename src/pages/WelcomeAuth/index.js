import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const WelcomeAuth = ({navigation}) => {
  return (
    <View>
      <Text>WelcomeAuth Page</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Go to Login Page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeAuth;
