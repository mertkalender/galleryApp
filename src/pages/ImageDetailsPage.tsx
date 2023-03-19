import {SafeAreaView, ScrollView, View} from 'react-native';
import {ImageData} from '../service/types/images';

type ImageDetailsPageProps = {
  imageDetails: ImageData;
  navigation: any;
};

export const ImageDetailsPage = ({
  imageDetails,
  navigation,
}: ImageDetailsPageProps) => {
  navigation.setOptions({
    headerShown: true,
    headerTransparent: true,
    headerStyle: {
      backgroundColor: 'rgba(52, 52, 52, 0.2)',
    },
    headerTitle: 'Image Details',
    headerTitleStyle: {
      color: 'gray',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};
