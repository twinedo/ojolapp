import React, {useEffect} from 'react';
import {View, Image, Text} from 'react-native';
import {welcomeAuth} from '../../assets';
import {colors} from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('WelcomeAuth');
    }, 2000);
  });

  return (
    <View style={styles.wrapper.component}>
      <Image source={welcomeAuth} style={styles.image.welcomeAuth} />
      <Text style={styles.text.welcome}>Selamat Datang di O-JoL</Text>
    </View>
  );
};

const styles = {
  wrapper: {
    component: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  image: {
    welcomeAuth: {
      height: 117,
      width: 219,
    },
  },
  text: {
    welcome: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.default,
      marginBottom: 76,
    },
  },
};
export default Splash;
