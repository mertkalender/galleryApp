import React from 'react';
import {View, Text} from 'react-native';
import {ImageData} from '../service/types/images';

export type ImageDetailProps = {
  imageData: ImageData;
};

export const ImageDetail = ({imageData}: ImageDetailProps) => {
  const dateString = new Date(imageData.created_utc * 1000).toDateString();
  return (
    <View style={{margin: '5%'}}>
      <Text style={{marginBottom: '10%', fontWeight: 'bold', fontSize: 25}}>
        DETAILS
      </Text>
      <Text style={{marginBottom: '5%', fontSize: 20, fontWeight: 'bold'}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'normal',
          }}>
          Title:{' '}
        </Text>
        {imageData.title}
      </Text>
      <Text style={{marginBottom: '5%', fontSize: 20, fontWeight: 'bold'}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'normal',
          }}>
          Date:{' '}
        </Text>
        {dateString}
      </Text>
      <Text style={{marginBottom: '5%', fontSize: 20, fontWeight: 'bold'}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'normal',
          }}>
          Author:{' '}
        </Text>
        {imageData.author}
      </Text>
    </View>
  );
};
