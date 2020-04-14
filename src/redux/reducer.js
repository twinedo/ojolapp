import {combineReducers} from 'redux';

const initialStateRegister = {
  form: {
    fullName: '',
    email: '',
    password: '',
  },
  title: 'Register',
  desc: 'ini Register Page',
};

const RegisterReducer = (state = initialStateRegister, action) => {
  if (action.type === 'SET_TITLE') {
    return {
      ...state,
      title: 'Ganti Title',
    };
  }
  if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue,
      },
    };
  }
  return state;
};

const initialStateLogin = {
  info: 'Masukkan Password Anda',
  isLogin: true,
};

const LoginReducer = (state = initialStateLogin, action) => {
  return state;
};

const reducer = combineReducers({
  RegisterReducer,
  LoginReducer,
});

export default reducer;
