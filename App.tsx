import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomePage } from './src/pages/home';
import { ImageDetailsPage } from './src/pages/imageDetails';

const Stack = createNativeStackNavigator();

const StackRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
        />
        <Stack.Screen name="Profile" component={ImageDetailsPage} options={{title: 'Welcome'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default StackRouter;
