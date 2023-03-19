import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, ActivityIndicator} from 'react-native';
import {ImageList} from '../components/ImageList';
import {KEYWORD_TO_GET} from '../constants/constants';
import {getImages} from '../service/images';
import {Image, ImageResponse} from '../service/types/images';

export const HomePage = ({navigation}: any) => {
  navigation.setOptions({
    headerShown: true,
    headerTransparent: true,
    headerStyle: {
      backgroundColor: 'rgba(52, 52, 52, 0.2)',
    },
    headerTitle: KEYWORD_TO_GET.toUpperCase(),
    headerTitleStyle: {
      color: 'gray',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });

  const [imageData, setImageData] = useState<Image[]>();
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    getImages(KEYWORD_TO_GET).then(response => {
      response.children.forEach(item => {
        console.log(item.data.url.slice(-3));
      });
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
        {
          fetching ? (
            <ActivityIndicator size="large" />
          ) : (
            <ImageList
              imageData={imageData as Image[]}
              navigation={navigation}
            />
          )
          // <Button
          //   title="Go to Image Details"
          //   onPress={() => navigation.navigate('ImageDetails', {name: 'Jane'})}
          // />
        }
      </View>
    </SafeAreaView>
  );
};
