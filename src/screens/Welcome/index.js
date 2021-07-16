import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import {LOGIN, REGISTER} from '../../constants/routeNames';
import styles from './styles';

const Welcome = () => {
  const {navigate} = useNavigation();
  return (
    <Container style={styles.container}>
      <CustomButton
        primary
        title="START"
        onPress={() => {
          navigate(REGISTER);
        }}
        style={{
          paddingHorizontal: 20,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,

          elevation: 7,
        }}
      />
      <View style={styles.createSection}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigate(LOGIN);
          }}>
          <Text style={styles.linkButton}>Log in</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Welcome;
