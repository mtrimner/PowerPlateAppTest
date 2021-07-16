import React, {Children, cloneElement, useState} from 'react';
import {View, Text} from 'react-native';
import Container from '../../common/Container';
import Step from '../Step';

const Wizard = ({children, initialValues}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [values, setValues] = useState(initialValues);

  console.log(values);
  const nextStep = () => {
    if (currentIndex !== children.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevStep = () => {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const onChange = (name, value) => {
    // console.log(value);
    setValues({...values, [name]: value});
  };

  const onSelect = (name, value) => {
    setValues({...values, [name]: value});
  };

  const onDateChange = (name, date) => {
    setValues({...values, [name]: date});
  };

  return (
    <View style={{flex: 1}}>
      {Children.map(children, (el, index) => {
        if (index === currentIndex) {
          return cloneElement(el, {
            currentIndex,
            nextStep,
            prevStep,
            isLast: currentIndex === children.length - 1,
            onChange,
            onSelect,
            values,
          });
        }

        return null;
      })}
    </View>
  );
};

Wizard.Step = props => {
  return <Step {...props} />;
};

export default Wizard;
