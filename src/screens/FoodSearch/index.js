import React from 'react';
import {Text, View} from 'react-native';
import {useState, useEffect} from 'react/cjs/react.development';
import nutritionix from '../../api/nutritionix';
import Input from '../../components/common/Input';
import FoodSearchResults from '../../components/FoodSearchResults';

const FoodSearch = () => {
  const [text, setText] = useState('');
  const [debouncedText, setDebouncedText] = useState('');
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    if (text) {
      searchFoods();
    }
  }, [debouncedText]);

  const searchFoods = async () => {
    const response = await nutritionix.get(
      `/search/instant?query=${debouncedText}&detailed=true`,
    );

    setFoods(response.data);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#141301'}}>
      <Input
        style={{
          borderWidth: 2,
          borderRadius: 30,
          backgroundColor: '#ffffff',
          marginHorizontal: 40,
        }}
        onChangeText={value => setText(value)}
        value={text}
      />
      <FoodSearchResults foodResults={foods} />
    </View>
  );
};

export default FoodSearch;
