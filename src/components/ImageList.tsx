import React from 'react';
import {
  FlatList,
  Image,
  View,
  Dimensions,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {
  COLUMN_COUNT,
  IMAGE_ITEM_HEIGHT,
  IMAGE_ITEM_WIDTH,
} from '../constants/constants';
import {Image as ImageType} from '../service/types/images';

export type ImageListProps = {
  imageData: ImageType[];
  navigation: any;
};

export const ImageList = ({imageData, navigation}: ImageListProps) => {
  return (
    <FlatList
      data={imageData}
      extraData={imageData}
      numColumns={COLUMN_COUNT}
      renderItem={({item}) =>
        item.data.url.slice(-3) != 'gif' && !item.data.is_video ? (
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ImageDetails', {imageDetails: item.data})
              }>
              <Image
                resizeMode="cover"
                source={{uri: item.data.url}}
                style={{
                  width: IMAGE_ITEM_WIDTH,
                  height: IMAGE_ITEM_HEIGHT,
                  margin: '1%',
                }}
              />
            </TouchableOpacity>
          </View>
        ) : null
      }
      keyExtractor={item => item.data.url}
    />
  );
};
