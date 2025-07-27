import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/appNavigator';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;
