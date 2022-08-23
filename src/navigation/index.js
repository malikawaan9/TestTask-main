import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/auth/Login/Login';

import Home from '../screens/home/Home';
import Splash from '../screens/splash/Splash';

const MainNavigator = createStackNavigator();

/**
 *
 * @returns Main Home  Navigator
 */
function MainStackNavigator() {
  return (
    <MainNavigator.Navigator>
      <MainNavigator.Screen
        options={{headerShown: false}}
        name="Splash"
        component={Splash}
      />
      <MainNavigator.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
      <MainNavigator.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
    </MainNavigator.Navigator>
  );
}

function AppNavigator() {
  return <MainStackNavigator />;
}

export default AppNavigator;
