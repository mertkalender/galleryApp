import {useEffect} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {ImageData} from '../service/types/images';

export const ImageDetailsPage = ({route, navigation}: any) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerStyle: {
        backgroundColor: 'rgba(52, 52, 52, 0.45)',
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
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};
