import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  ActivityIndicator,
  TextInput,
  Text,
} from 'react-native';
import {ImageList} from '../components/ImageList';
import {
  HEADER_BACKGROUND_COLOR,
  KEYWORD_TO_GET,
  windowHeight,
} from '../constants/constants';
import {getImages} from '../service/images';
import {TypedUseSelectorHook, useSelector, useDispatch} from 'react-redux';
import {setImages} from '../store/slices/imagesSlices';
import {RootState} from '../store/store';
import {HomeHeader} from '../components/homeHeader';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const HomePage = ({navigation}: any) => {
  const imagesData = useAppSelector(state => state.images.listData);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerStyle: {
        backgroundColor: HEADER_BACKGROUND_COLOR,
      },
      headerTitle: () => <HomeHeader onChangeText={onSearchTextChange} />,
    });
  }, [imagesData]);

  const dispatch = useDispatch();

  useEffect(() => {
    getImageData();
  }, []);

  const getImageData = () => {
    dispatch(setImages({...imagesData, loading: true}));
    getImages(KEYWORD_TO_GET).then(response => {
      const filteredData = response.children.filter(item => {
        return (
          (item.data.url.slice(-3) === 'jpg' ||
            item.data.url.slice(-3) === 'png') &&
          !item.data.is_video
        );
      });
      dispatch(
        setImages({...imagesData, images: filteredData, loading: false}),
      );
    });
  };

  const onSearchTextChange = (text: string) => {
    if (!(!text || 0 === text.length)) {
      const filteredData = imagesData.images.filter(item => {
        return item.data.title.toLowerCase().includes(text.toLowerCase());
      });
      dispatch(
        setImages({...imagesData, images: filteredData, loading: false}),
      );
    } else {
      getImageData();
    }
  };

  return (
    <SafeAreaView>
      <View>
        {imagesData.loading ? (
          <View style={{marginTop: windowHeight / 2}}>
            <ActivityIndicator size="large" />
          </View>
        ) : imagesData.images.length === 0 ? (
          <View style={{marginTop: windowHeight / 2}}>
            <Text style={{textAlign: 'center'}}>No Images Found</Text>
          </View>
        ) : (
          <ImageList imageData={imagesData.images} navigation={navigation} />
        )}
      </View>
    </SafeAreaView>
  );
};
