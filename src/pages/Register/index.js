import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {Input, Button} from '../../components/atoms';
import {colors} from '../../utils';
import {IconBack, IllustrationRegister} from '../../assets';
import {useSelector, useDispatch} from 'react-redux';

const Register = () => {
  const RegisterReducer = useSelector((state) => state.RegisterReducer);
  const dispatch = useDispatch();
  // const [form, setForm] = useState({
  //   fullName: '',
  //   email: '',
  //   password: '',
  // });

  // useEffect(() => {
  //   console.log('global state: ', RegisterReducer.form);

  // }, [RegisterReducer.form]);

  const sendData = () => {
    console.log('data yg dikirim: ', RegisterReducer.form);
  };

  const onInputChange = (value, input) => {
    // setForm({
    //   ...form, //mengcopy semua object yg ada di form (fullName, email, password)
    //   [input]: value,
    // });
    dispatch({type: 'SET_FORM', inputType: input, inputValue: value});
  };

  return (
    <View style={styles.wrapper.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <IconBack width={20} height={20} fill={'purple'} />
        <Image source={IllustrationRegister} style={styles.illustration} />
        <Text style={styles.text.desc}>
          Mohon mengisi beberapa data untuk proses daftar anda{' '}
          {RegisterReducer.title}
        </Text>
        <View style={styles.space(64)} />
        <Input
          placeholder="Nama Lengkap"
          value={RegisterReducer.form.fullName}
          onChangeText={(value) => onInputChange(value, 'fullName')}
        />
        <View style={styles.space(33)} />
        <Input
          placeholder="Email"
          value={RegisterReducer.form.email}
          onChangeText={(value) => onInputChange(value, 'email')}
        />
        <View style={styles.space(33)} />
        <Input
          placeholder="Password"
          value={RegisterReducer.form.password}
          onChangeText={(value) => onInputChange(value, 'password')}
          secureTextEntry={true}
        />
        <View style={styles.space(83)} />
        <Button title="Daftar" onPress={sendData} />
      </ScrollView>
    </View>
  );
};

const styles = {
  wrapper: {
    page: {
      padding: 20,
    },
  },
  illustration: {
    maxWidth: 106,
    maxHeight: 115,
    marginTop: 8,
    resizeMode: 'contain',
  },
  text: {
    desc: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.default,
      marginTop: 16,
      maxWidth: 200,
    },
  },
  space: (value) => {
    return {
      height: value,
    };
  },
};

export default Register;
