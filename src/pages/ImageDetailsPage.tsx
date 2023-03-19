import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import SwipeUpDown from 'react-native-swipe-up-down';
import {ImageDetail} from '../components/imageDetail';
import {
  HEADER_BACKGROUND_COLOR,
  IMAGE_HEIGHT,
  IMAGE_WIDTH,
} from '../constants/constants';

export const ImageDetailsPage = ({route, navigation}: any) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: 'Details',
      headerTitleStyle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
      },
      headerTintColor: 'white',
    });
  }, []);

  const {imageDetails} = route.params;
  const [modalBackgroundColor, setModalBackgroundColor] = useState(
    'rgba(30, 30, 30, 0)',
  );

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
        <SwipeUpDown
          itemMini={(show: any) => <></>}
          itemFull={(hide: any) => <ImageDetail imageData={imageDetails} />}
          onShowMini={() => setModalBackgroundColor('rgba(30, 30, 30, 0)')}
          onShowFull={() => setModalBackgroundColor('rgba(30, 30, 30, 0.8)')}
          animation="spring"
          extraMarginTop={200}
          iconColor="white"
          iconSize={40}
          style={{backgroundColor: modalBackgroundColor}} // style for swipe
          swipeHeight={200}
          disableSwipeIcon
        />
      </View>
    </SafeAreaView>
  );
};
