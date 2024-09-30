import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {navigationRef} from '../helpers/NavigationUtils';
import LudoBoardScreen from '../screens/LudoBoardScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="LudoBoardScreen"
          options={{
            // @ts-ignore
            animation: 'fade',
          }}
          component={LudoBoardScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
