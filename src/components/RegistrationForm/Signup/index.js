import React, {memo, useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import Input from '../../common/Input';
import CustomButton from '../../common/CustomButton';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Signup = ({onChange, value}) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    if (value.name !== '') {
      setErrors(prev => {
        return {...prev, name: null};
      });
    }

    if (!value.name) {
      setErrors(prev => {
        return {...prev, name: 'Please enter your name'};
      });
    } else if (!value.email) {
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

  if (errors.name) {
    errorMessage = <Text style={styles.error}>{errors.name}</Text>;
  } else if (errors.email) {
    errorMessage = <Text style={styles.error}>{errors.email}</Text>;
  } else if (errors.password) {
    errorMessage = <Text style={styles.error}>{errors.password}</Text>;
  } else {
    errorMessage = null;
  }

  const onPress = () => {
    auth()
      .createUserWithEmailAndPassword(value.email, value.password)
      .then(resp => {
        firestore()
          .collection('users')
          .doc(resp.user.uid)
          .set({
            name: value.name,
            dob: value.dob,
            height: parseInt(value.height, 10),
            sex: value.sex,
            createdAt: firestore.FieldValue.serverTimestamp(),
          })
          .then(() => {
            firestore()
              .collection('users')
              .doc(resp.user.uid)
              .collection('weights')
              .add({
                weight: parseInt(value.currentWeight, 10),
                createdAt: firestore.FieldValue.serverTimestamp(),
              });
          });
      })

      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          setErrors(prev => {
            return {...prev, email: 'That email address is already in use!'};
          });
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          setErrors(prev => {
            return {...prev, email: 'That email address is invalid!'};
          });
        }

        if (error.code === 'auth/weak-password') {
          console.log('Password should be at least 6 characters');
          setErrors(prev => {
            return {
              ...prev,
              email: null,
              password: 'Password should be at least 6 characters!',
            };
          });
        }

        console.error(error);
      });
  };
  return (
    <View style={styles.form}>
      <Input
        style={styles.input}
        //   label="Name"
        icon={<Text>HIDE</Text>}
        iconPosition="right"
        placeholder="Enter Name"
        onChangeText={value => {
          onChange({name: 'name', value});
        }}
        value={value.name}
        //   error={errors.name}
      />

      <Input
        style={styles.input}
        //   label="Email"
        icon={<Text>HIDE</Text>}
        iconPosition="right"
        placeholder="Enter Email"
        onChangeText={value => {
          onChange({name: 'email', value});
        }}
        value={value.email}
        //   error={errors.email}
      />

      <Input
        style={styles.input}
        //   label="Password"
        icon={<Text>HIDE</Text>}
        iconPosition="right"
        placeholder="Enter Password"
        secureTextEntry={true}
        onChangeText={value => {
          onChange({name: 'password', value});
        }}
        value={value.password}
        // secureTextEntry={
        //   !value.password || value.password.length <= 0 ? false : true
        // }
        //   error={errors.password}
      />
      {errorMessage}
      <CustomButton
        style={styles.loginButton}
        title="Signup"
        tertiary
        onPress={validate}
      />
    </View>
  );
};

export default memo(Signup);
