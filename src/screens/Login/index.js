import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import LoginComponent from '../../components/Login';

const Login = () => {
  const [value, setValue] = useState('');
  return <LoginComponent />;
};

export default Login;
