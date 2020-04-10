import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils';

const Button = ({title}) => {
  return (
    <TouchableOpacity style={styles.wrapper.component}>
      <Text style={styles.text.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  wrapper: {
    component: {
      backgroundColor: colors.default,
      borderRadius: 25,
      paddingVertical: 13,
    },
  },
  text: {
    title: {
      fontSize: 12,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      textAlign: 'center',
      color: 'white',
    },
  },
};

export default Button;
