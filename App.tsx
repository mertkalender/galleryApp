import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomePage} from './src/pages/HomePage';
import {ImageDetailsPage} from './src/pages/ImageDetailsPage';
import {DEFAULT_BACKGROUND_COLOR} from './src/constants/constants';

const Stack = createNativeStackNavigator();

const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: DEFAULT_BACKGROUND_COLOR,
  },
};

const StackRouter = () => {
  return (
    <NavigationContainer theme={defaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="ImageDetails" component={ImageDetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRouter;
