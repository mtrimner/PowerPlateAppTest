import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import styles from './styles';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import Picker from '../../components/common/Picker';
import RadioButton from '../../components/common/RadioButton';
import SignupComponent from '../../components/Signup';
import Wizard from '../../components/stepWizard/Wizard';
import {HEIGHTOPTIONS} from '../../constants/heightOptions';
import DateTimePicker from '../../components/common/DateTimePicker';
import FormContainer from '../../components/RegistrationForm/FormContainer';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const wizardProps = 'HelloWorld';

  // const onChange = ({name, value}) => {
  //   setForm({...form, [name]: value});

  //   if (value !== '') {
  //     if (name === 'password') {
  //       if (value.length < 6) {
  //         setErrors(prev => {
  //           return {...prev, [name]: 'Minimum 6 characters'};
  //         });
  //       } else {
  //         setErrors(prev => {
  //           return {...prev, [name]: null};
  //         });
  //       }
  //     } else {
  //       setErrors(prev => {
  //         return {...prev, [name]: null};
  //       });
  //     }
  //   }
  // };

  const sexRadioItems = [
    {
      label: 'Male',
      value: 'male',
      selected: false,
    },
    {
      label: 'Female',
      value: 'female',
      selected: false,
    },
  ];

  const changeActiveRadio = index => {
    sexRadioItems.map(item => (item.selected = false));

    sexRadioItems[index].selected = true;
  };

  const onSubmit = () => {
    console.log('form :>> ', form);

    if (!form.name) {
      setErrors(prev => {
        return {...prev, name: 'Must add name'};
      });
    }

    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Must add email'};
      });
    }

    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Must add password'};
      });
    }
  };

  return (
    <View style={{flex: 1}}>
      <FormContainer />
    </View>
    // <Container style={{backgroundColor: '#2a9d8f', justifyContent: 'center'}}>
    //   {/* <SignupComponent
    //     onSubmit={onSubmit}
    //     onChange={onChange}
    //     form={form}
    //     errors={errors}
    //   /> */}
    //   <Wizard
    //     initialValues={{
    //       dob: new Date(),
    //       sex: '',
    //       height: null,
    //       currentWeight: '',
    //       name: '',
    //       email: '',
    //       password: '',
    //     }}>
    //     <Wizard.Step>
    //       {({onChange, values}) => (
    //         <View
    //           style={{
    //             flex: 1,
    //             alignItems: 'stretch',
    //             justifyContent: 'center',
    //             paddingHorizontal: 30,
    //           }}>
    //           <View style={styles.textWrapper}>
    //             <Text style={styles.text}>What's your height?</Text>
    //           </View>
    //           <Picker
    //             options={HEIGHTOPTIONS}
    //             selectedValue={values.height}
    //             onValueChange={item => {
    //               onChange('height', item);
    //             }}
    //             error={errors.password}
    //             // value={values.sex}
    //           />
    //         </View>
    //       )}
    //     </Wizard.Step>
    //     <Wizard.Step>
    //       {({onChange, values}) => (
    //         <View
    //           style={{
    //             flex: 1,
    //             alignItems: 'stretch',
    //             justifyContent: 'center',
    //             paddingHorizontal: 30,
    //           }}>
    //           <View style={styles.textWrapper}>
    //             <Text style={styles.text}>What's your birthday?</Text>
    //           </View>
    //           <DateTimePicker
    //             onChange={(event, selectedDate) => {
    //               onChange('dob', selectedDate);
    //             }}
    //             value={values.dob}
    //             display="spinner"
    //             // error={errors.password}
    //           />
    //         </View>
    //       )}
    //     </Wizard.Step>
    //     <Wizard.Step>
    //       {({onSelect, values}) => (
    //         <View
    //           style={{
    //             flex: 1,
    //             alignItems: 'stretch',
    //             justifyContent: 'center',
    //             paddingHorizontal: 30,
    //           }}>
    //           <View style={styles.textWrapper}>
    //             <Text style={styles.text}>What's your sex?</Text>
    //           </View>
    //           {sexRadioItems.map((item, index) => (
    //             <RadioButton
    //               key={index}
    //               title={item.label}
    //               selected={item.selected}
    //               // iconPosition="right"
    //               // placeholder="Enter Name"
    //               onPress={() => {
    //                 onSelect('sex', item.value);
    //                 changeActiveRadio(index);
    //               }}
    //               error={errors.password}
    //               // value={values.sex}
    //             />
    //           ))}
    //         </View>
    //       )}
    //     </Wizard.Step>
    //     <Wizard.Step>
    //       {({onChange, values}) => (
    //         <View
    //           style={{
    //             flex: 1,
    //             alignItems: 'stretch',
    //             justifyContent: 'center',
    //             paddingHorizontal: 30,
    //           }}>
    //           <View style={styles.textWrapper}>
    //             <Text style={styles.text}>What's your current weight?</Text>
    //           </View>
    //           <Input
    //             label="Current Weight"
    //             iconPosition="right"
    //             keyboardType="number-pad"
    //             icon={<Text>LBS</Text>}
    //             placeholder="Enter Weight"
    //             onChangeText={value => {
    //               onChange('currentWeight', value);
    //             }}
    //             error={errors.password}
    //             value={values.current}
    //           />
    //         </View>
    //       )}
    //     </Wizard.Step>
    //     <Wizard.Step>
    //       {({onChange, values}) => (
    //         <View
    //           style={{
    //             flex: 1,
    //             alignItems: 'stretch',
    //             justifyContent: 'center',
    //             paddingHorizontal: 30,
    //           }}>
    //           <Input
    //             label="Email"
    //             iconPosition="right"
    //             placeholder="Enter Email"
    //             onChangeText={value => {
    //               onChange('email', value);
    //             }}
    //             error={errors.password}
    //             value={values.email}
    //           />
    //         </View>
    //       )}
    //     </Wizard.Step>
    //     <Wizard.Step>
    //       {({onChange, values}) => (
    //         <View
    //           style={{
    //             flex: 1,
    //             alignItems: 'stretch',
    //             justifyContent: 'center',
    //             paddingHorizontal: 30,
    //           }}>
    //           <SignupComponent
    //             onSubmit={onSubmit}
    //             onChangeText={(name, value) => {
    //               onChange(name, value);
    //             }}
    //             form={form}
    //             errors={errors}
    //           />
    //         </View>
    //       )}
    //     </Wizard.Step>
    //   </Wizard>
    // </Container>
  );
};

export default Register;
