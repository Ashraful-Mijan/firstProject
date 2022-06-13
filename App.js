/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar, StyleSheet} from 'react-native';

import {colors} from './src/theme/colors';
import {spacing} from './src/theme/spacing';
import Home from './src/screens/home';
import Details from './src/screens/details';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar backgroundColor={colors.black} currentHeight={spacing[1]} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});

export default App;
