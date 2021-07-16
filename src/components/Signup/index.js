import React from 'react';
import {Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../constants/routeNames';

const SignupComponent = ({onSubmit, onChangeText, form, errors}) => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />

      <View>
        <Text style={styles.title}> Welcome To Horizon </Text>
        <Text style={styles.subTitle}> Create an account </Text>

        <View style={styles.form}>
          <Input
            label="Name"
            icon={<Text>HIDE</Text>}
            iconPosition="right"
            placeholder="Enter Name"
            onChangeText={value => {
              onChangeText({name: 'name', value});
            }}
            error={errors.name}
          />

          <Input
            label="Email"
            icon={<Text>HIDE</Text>}
            iconPosition="right"
            placeholder="Enter Email"
            onChangeText={value => {
              onChangeText({name: 'email', value});
            }}
            error={errors.email}
          />

          <Input
            label="Password"
            icon={<Text>HIDE</Text>}
            iconPosition="right"
            placeholder="Enter Password"
            secureTextEntry={true}
            onChangeText={value => {
              onChangeText({name: 'password', value});
            }}
            error={errors.password}
          />
          <CustomButton onPress={onSubmit} primary title="Click Here" />
        </View>
        <View style={styles.createSection}>
          <Text style={styles.createSection}>Need a new account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigate(LOGIN);
            }}>
            <Text style={styles.linkButton}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default SignupComponent;
