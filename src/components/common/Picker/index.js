import React, {useState} from 'react';
import {View, Text, Platform, Pressable, Modal} from 'react-native';
import {Picker as RnPicker} from '@react-native-picker/picker';
import styles from './styles';

const Picker = ({selectedValue, onValueChange, options}) => {
  const [show, setShow] = useState(false);

  const onCancelPress = () => {
    setShow(false);
  };

  const onDonePress = () => {
    setShow(false);
  };

  const renderPicker = (
    <RnPicker
      selectedValue={selectedValue}
      onValueChange={onValueChange}
      dropdownIconColor="#000000"
      style={{color: '#000000'}}>
      {Object.entries(options).map(([key, value]) => (
        <RnPicker.Item
          style={{fontSize: 22}}
          color={'#000000'}
          label={value}
          value={key}
          key={key}
        />
      ))}
    </RnPicker>
  );

  const getImperialHeight = selectedValue ? options[selectedValue] : '';
  return (
    <>
      {Platform.OS === 'android' && (
        <View style={styles.wrapper}>{renderPicker}</View>
      )}
      {Platform.OS === 'ios' && (
        <Pressable onPress={() => setShow(true)}>
          <View style={styles.wrapper}>
            <Text style={styles.text}>{getImperialHeight}</Text>

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
                      <View style={{marginTop: 20}}>{renderPicker}</View>
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
          </View>
        </Pressable>
      )}
    </>
  );
  // <RnPicker
  //   selectedValue={selectedValue}
  //   onValueChange={onValueChange}
  //   dropdownIconColor="#000000"
  //   style={{color: '#000000'}}>
  //   {Object.entries(options).map(([key, value]) => (
  //     <RnPicker.Item
  //       style={{fontSize: 22}}
  //       color={Platform.OS === 'ios' && '#ffffff'}
  //       label={value}
  //       value={key}
  //       key={key}
  //     />
  //   ))}
  // </RnPicker>
};

export default Picker;
