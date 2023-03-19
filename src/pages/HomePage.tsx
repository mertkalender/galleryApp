import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, ActivityIndicator} from 'react-native';
import {ImageList} from '../components/ImageList';
import {KEYWORD_TO_GET} from '../constants/constants';
import {getImages} from '../service/images';
import {Image, ImageResponse} from '../service/types/images';

export const HomePage = ({navigation}: any) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerStyle: {
        backgroundColor: 'rgba(52, 52, 52, 0.45)',
      },
      headerTitle: KEYWORD_TO_GET.toUpperCase(),
      headerTitleStyle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
      },
    });
  }, []);

  const [imageData, setImageData] = useState<Image[]>();
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    getImages(KEYWORD_TO_GET).then(response => {
      const filteredData = response.children.filter(item => {
        return (
          (item.data.url.slice(-3) === 'jpg' ||
            item.data.url.slice(-3) === 'png') &&
          !item.data.is_video
        );
      });

      setImageData(filteredData);
      setFetching(false);
    });
  }, []);

  return (
    <SafeAreaView>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        {fetching ? (
          <ActivityIndicator size="large" />
        ) : (
          <ImageList imageData={imageData as Image[]} navigation={navigation} />
        )}
      </View>
    </SafeAreaView>
  );
};
