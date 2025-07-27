import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Calculator from '../screens/Calculator';
import TwoSum from '../screens/TwoSum';

export type RootStackParamList = {
  Home: undefined;
  Calculator: undefined;
  TwoSum: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Calculator" component={Calculator} />
      <Stack.Screen name="TwoSum" component={TwoSum} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
