import React, {useState} from 'react';
import {Text, View, Image, Platform, Pressable} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {REGISTER} from '../../constants/routeNames';
import Message from '../common/Message';
import firebaseVerification from '../../api/firebaseVerification';
import auth from '@react-native-firebase/auth';

import HeavyText from '../common/text/HeavyText';
import BoldText from '../common/text/BoldText';
import HideKeyboardView from '../common/HideKeyboardView';

const LoginComponent = () => {
  const [values, setValues] = useState({email: '', password: ''});
  const [errors, setErrors] = useState({});

  const validate = () => {
    if (values.email !== '') {
      setErrors(prev => {
        return {...prev, email: null};
      });
    }

    if (!value.email) {
      setErrors(prev => {
        return {...prev, email: 'Please enter your email'};
      });
    } else if (!value.password) {
      setErrors(prev => {
        return {
          ...prev,
          password: 'Password should be at least 6 characters',
        };
      });
    } else {
      onPress();
    }
  };

  let errorMessage;

  if (errors.email) {
    errorMessage = <Text style={styles.error}>{errors.email}</Text>;
  } else if (errors.password) {
    errorMessage = <Text style={styles.error}>{errors.password}</Text>;
  } else {
    errorMessage = null;
  }

  onChangeText = ({name, value}) => {
    setValues({...values, [name]: value});
  };
  const {navigate} = useNavigation();

  const onLoginPress = async () => {
    auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(cred => {
        console.log(cred);
      });

    firebaseVerification.request({
      method: 'POST',
      url: 'users',
      headers: {Authorization: `Bearer ${iDToken}`},
    });
    console.log(params);
  };

  return (
    <HideKeyboardView style={styles.container}>
      <HeavyText style={styles.title}>Welcome Back!</HeavyText>

      <View style={styles.form}>
        <Input
          label="Email"
          icon={<Text>HIDE</Text>}
          iconPosition="right"
          placeholder="Enter Email"
          onChangeText={value => {
            onChangeText({name: 'email', value});
          }}
          style={styles.input}
          value={values.email}
          keyboardType="email-address"
        />

        <Input
          label="Password"
          icon={<Text>HIDE</Text>}
          iconPosition="right"
          placeholder="Enter Password"
          secureTextEntry={values.password.length > 0 ? true : false}
          onChangeText={value => {
            onChangeText({name: 'password', value});
          }}
          style={styles.input}
          value={values.password}
        />
        <CustomButton
          tertiary
          style={styles.emailLoginButton}
          title="Login"
          onPress={() => onLoginPress()}
        />
        <BoldText style={styles.or}>Or</BoldText>
        <View style={styles.oAuthButtonContainer}>
          <CustomButton
            tertiary
            style={styles.oAuthButtons}
            title="Apple"
            onPress={() => onLoginPress()}
          />
          <CustomButton
            tertiary
            style={styles.oAuthButtons}
            title="Google"
            onPress={() => onLoginPress()}
          />
          <CustomButton
            tertiary
            style={styles.oAuthButtons}
            title="Facebook"
            onPress={() => onLoginPress()}
          />
        </View>
      </View>
      <View style={styles.createSection}>
        <BoldText style={styles.noAccountText}>Don't have an account?</BoldText>
        <Pressable
          onPress={() => {
            navigate(REGISTER);
          }}>
          <HeavyText style={styles.linkButton}>SIGN UP</HeavyText>
        </Pressable>
      </View>
    </HideKeyboardView>
  );
};

export default LoginComponent;
