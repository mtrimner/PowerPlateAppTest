import React, {useState} from 'react';
import {View, Text, Platform, Pressable, Modal} from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles';

const DateTimePicker = ({onChange, value, display}) => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(value);

  const onAndroidDateChange = (event, selectedDate) => {
    setShow(false);
    if (selectedDate) {
      setDate(selectedDate);
      onChange(selectedDate);
    }
  };

  const onDateChange = (event, selectedDate) => {
    setDate(selectedDate);
  };

  const onCancelPress = () => {
    setShow(false);
    setDate(value);
  };

  const onDonePress = () => {
    onChange(date);
    setShow(false);
  };

  const renderDatePicker = (
    <RNDateTimePicker
      value={date}
      display={display}
      onChange={Platform.OS === 'ios' ? onDateChange : onAndroidDateChange}
    />
  );

  return (
    <Pressable onPress={() => setShow(true)}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>{new Date(value).toLocaleDateString()}</Text>

        {Platform.OS === 'android' && show && renderDatePicker}
        {Platform.OS === 'ios' && (
          <Modal
            transparent={true}
            animationType="slide"
            visible={show}
            supportedOrientations={['portrait']}
            onRequestClose={() => setShow(false)}>
            <View style={{flex: 1}}>
              <Pressable
                style={{
                  flex: 1,
                  alignItems: 'flex-end',
                  flexDirection: 'row',
                }}
                onPress={() => setShow(false)}>
                <Pressable style={{flex: 1}}>
                  <View
                    style={{
                      backgroundColor: '#ffffff',
                      height: 256,
                      overFlow: 'hidden',
                    }}>
                    <View style={{marginTop: 20}}>{renderDatePicker}</View>
                    <Pressable
                      onPress={onCancelPress}
                      style={[styles.btnText, styles.btnCancel]}>
                      <Text>Cancel</Text>
                    </Pressable>
                    <Pressable
                      onPress={onDonePress}
                      style={[styles.btnText, styles.btnDone]}>
                      <Text>Done</Text>
                    </Pressable>
                  </View>
                </Pressable>
              </Pressable>
            </View>
          </Modal>
        )}
      </View>
    </Pressable>
  );
};

export default DateTimePicker;
