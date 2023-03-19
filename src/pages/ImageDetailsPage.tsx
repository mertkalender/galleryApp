import React, {useEffect} from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import SwipeUpDown from 'react-native-swipe-up-down';
import {IMAGE_HEIGHT, IMAGE_WIDTH} from '../constants/constants';

export const ImageDetailsPage = ({route, navigation}: any) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerStyle: {
        backgroundColor: 'rgba(30, 30, 30, 0.45)',
      },
      headerTitle: 'Image Details',
      headerTitleStyle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
      },
    });
  }, []);

  const {imageDetails} = route.params;

  return (
    <SafeAreaView>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={{uri: imageDetails.url}}
          style={{
            resizeMode: 'contain',
            width: IMAGE_WIDTH,
            height: IMAGE_HEIGHT,
          }}
        />
      </View>
    </SafeAreaView>
  );
};
