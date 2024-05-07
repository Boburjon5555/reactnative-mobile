
// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './SignUpScreen';
import SignInScreen from './SignInScreen';
import BookshelfPage from './BookshelfPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Sign Up' }} />
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: 'Sign In' }} />
        <Stack.Screen name="BookshelfPage" component={BookshelfPage} options={{ title: 'BookshelfPage' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;




/*
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';
import BookshelfPage from './BookshelfPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUpPage} options={{ title: 'Sign Up' }} />
        <Stack.Screen name="SignIn" component={SignInPage} options={{ title: 'Sign In' }} />
        <Stack.Screen name="Bookshelf" component={BookshelfPage} options={{ title: 'Bookshelf' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
*/