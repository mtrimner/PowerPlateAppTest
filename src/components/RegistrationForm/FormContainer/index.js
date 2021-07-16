import React, {useState, useRef, useCallback} from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import CustomButton from '../../common/CustomButton';
import AgeSelection from '../AgeSelection';
import HeightSelection from '../HeightSelection';
import SexSelection from '../SexSelection';
import Signup from '../Signup';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import BodyWeight from '../BodyWeight';
import auth from '@react-native-firebase/auth';
import BoldText from '../../common/text/BoldText';

const FormContainer = () => {
  const {width, height} = Dimensions.get('window');
  const [formValues, setFormValues] = useState({dob: new Date()});
  const [currentStep, setCurrentStep] = useState(1);
  const [sliderPage, setSliderPage] = useState({currentPage: 1});
  const [errors, setErrors] = useState({});
console.log(formValues)
  const scrollRef = useRef();
  const bodyweightRef = useRef();

  const onChange = useCallback(
    ({name, value}) => {
      setFormValues({...formValues, [name]: value});
    },
    [formValues],
  );

  const onNextButton = ({name, value}) => {
    if (!formValues.height) {
      setErrors(prev => {
        return {...prev, height: 'Please select height'};
      });
    }
    if (!formValues.dob) {
      setErrors(prev => {
        return {...prev, dob: 'Please enter your date of birth'};
      });
    }
    if (!formValues.sex) {
      setErrors(prev => {
        return {...prev, sex: 'Please select your sex'};
      });
    }
    if (!formValues.currentWeight) {
      setErrors(prev => {
        return {...prev, currentWeight: 'Please enter your weight'};
      });
    }
  };

  const onCreateAccountWithEmailAndPassword = () => {
    if (!formValues.name) {
      setErrors(prev => {
        return {...prev, name: 'Please enter your name'};
      });
    }
    if (!formValues.email) {
      setErrors(prev => {
        return {...prev, email: 'Please enter your email'};
      });
    }
    if (!formValues.password) {
      setErrors(prev => {
        return {...prev, currentWeight: 'Please enter create a password'};
      });
    }
  };

  const setPage = event => {
    const {currentPage} = sliderPage;
    const {x} = event.nativeEvent.contentOffset;
    const indexOfCurrentScreen = Math.round(x / width);

    if (
      indexOfCurrentScreen !== currentPage + 1 ||
      indexOfCurrentScreen === currentPage
    ) {
      setSliderPage({
        ...sliderPage,
        currentPage: indexOfCurrentScreen + 1,
      });
    }
  };

  const next = () => {
    scrollRef.current.scrollTo({
      x: width * sliderPage.currentPage,
      animated: true,
    });
    setCurrentStep(currentStep + 1);
  };

  const prev = () => {
    scrollRef.current.scrollTo({
      x: width * (sliderPage.currentPage - 2),
      animated: true,
    });
    setCurrentStep(currentStep - 1);
  };

  const focusInput = ref => {
    ref.current.focus();
  };

  const blurInput = ref => {
    ref.current.blur();
  };

  return (
    <LinearGradient
      colors={['rgba(60, 146, 215, 1)', 'rgba(60, 146, 215, 0.8)']}
      style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          style={{flex: 1}}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          onScroll={event => {
            setPage(event);
          }}
          ref={scrollRef}
          scrollEventThrottle={200}>
          <View style={styles.screen}>
            <View style={styles.component}>
              <HeightSelection
                onChange={onChange}
                selectedValue={formValues.height}
                currentStep={currentStep}
                error={errors.height}
                onPress={next}
              />
            </View>
          </View>
          <View style={styles.screen}>
            <View style={styles.component}>
              <AgeSelection
                onChange={onChange}
                selectedValue={formValues.dob}
                currentStep={currentStep}
                error={errors.dob}
                onPress={next}
                prev={prev}
              />
            </View>
          </View>
          <View style={styles.screen}>
            <View style={styles.component}>
              <SexSelection
                onSelect={onChange}
                onPress={() => {
                  next();
                  focusInput(bodyweightRef);
                }}
                prev={prev}
                value={formValues.sex}
                onPress={() => {
                  next();
                  focusInput(bodyweightRef);
                }}
                prev={prev}
              />
            </View>
          </View>

          <KeyboardAvoidingView
            style={styles.screen}
            enabled
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.component}>
              <BodyWeight
                label="Current Weight"
                keyboardType="numeric"
                icon={<Text>LBS</Text>}
                placeholder="Enter Weight"
                onChange={onChange}
                value={formValues.currentWeight}
                ref={bodyweightRef}
                error={errors.currentWeight}
                prev={() => {
                  prev();
                  blurInput(bodyweightRef);
                }}
                onPress={() => {
                  next();
                  blurInput(bodyweightRef);
                }}
              />
            </View>
          </KeyboardAvoidingView>

          <View style={styles.screen}>
            <View style={styles.authButtons}>
              <CustomButton
                title="Signup with Apple"
                primary
                onPress={() => prev(bodyweightRef)}
              />
              <CustomButton
                title="Signup with Google"
                primary
                onPress={() => prev(bodyweightRef)}
              />
              <CustomButton
                title="Signup with Facebook"
                primary
                onPress={() => prev(bodyweightRef)}
              />
              <View style={{marginTop: 100}}>
                <CustomButton
                  title="Login with Email"
                  tertiary
                  onPress={next}
                />
              </View>
            </View>
          </View>
          <View style={styles.screen}>
            <View style={styles.component}>
              <Signup onChange={onChange} value={formValues} error={errors} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default FormContainer;
