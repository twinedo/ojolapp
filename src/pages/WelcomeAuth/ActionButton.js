import React from 'react';
import {View, Text} from 'react-native';
import {colors} from '../../utils';
import {Button} from '../../components';

const ActionButton = ({desc, title, onPress}) => {
  return (
    <View style={styles.wrapper.component}>
      <Text style={styles.text.desc}>{desc}</Text>
      <Button title={title} onPress={onPress} />
    </View>
  );
};

const styles = {
  wrapper: {
    component: {marginBottom: 43, maxWidth: 225},
  },
  text: {
    desc: {
      fontSize: 14,
      color: colors.text.default,
      textAlign: 'center',
      paddingHorizontal: '10%',
      marginBottom: 16,
    },
  },
};

export default ActionButton;
