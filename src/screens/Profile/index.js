import React, {useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import auth from '@react-native-firebase/auth';

const Profile = () => {
  const {setOptions, toggleDrawer} = useNavigation();
  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}>
          <Text>NAV</Text>
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <Pressable
      onPress={() => {
        auth().signOut();
      }}>
      <Text>Log Out</Text>
    </Pressable>
  );
};

export default Profile;
