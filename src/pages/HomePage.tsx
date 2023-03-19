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

export const HomePage = ({navigation}: any) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerStyle: {
        backgroundColor: HEADER_BACKGROUND_COLOR,
      },
      headerTitle: (props: any) => (
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
            onChangeText={text => onSearchTextChange(text)}
            value={searchText}
            style={{padding: 10}}
          />
        </View>
      ),
    });
  }, []);

  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const imagesData = useAppSelector(state => state.images.listData);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

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
  // when user enter text in search box, every item will be evaluated by their item.data.title property
  const onSearchTextChange = (text: string) => {
    if (text && text != '') {
      setSearchText(text);
      const filteredData = imagesData.images.filter(item => {
        return item.data.title.toLowerCase().includes(text.toLowerCase());
      });
      dispatch(setImages({...imagesData, images: filteredData}));
    } else {
      setSearchText('');
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
        ) : (
          <ImageList imageData={imagesData.images} navigation={navigation} />
        )}
      </View>
      <View style={{height: 10}}></View>
    </SafeAreaView>
  );
};
