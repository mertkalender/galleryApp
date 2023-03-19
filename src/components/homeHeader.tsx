import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {KEYWORD_TO_GET} from '../constants/constants';
import {ImageData} from '../service/types/images';

export type ImageDetailProps = {
  onChangeText: (text: string) => void;
};

export const HomeHeader = ({onChangeText}: ImageDetailProps) => {
  return (
    <View
      style={{
        backgroundColor: 'transparent',
        width: '100%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
        {KEYWORD_TO_GET.toUpperCase()}
      </Text>
      <TextInput
        editable
        placeholder="Search Images"
        placeholderTextColor={'#ffffff'}
        maxLength={200}
        onChangeText={text => onChangeText(text)}
        style={{padding: 10, marginLeft: 20}}
      />
    </View>
  );
};
