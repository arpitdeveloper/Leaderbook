import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login_screen from './src/Login';
import Forgot_pasword from './src/Password';
import Home_screen from './src/Drawer';
import Forgot from './src/components/Demo';
import Demo from './src/components/Demo';
import Drawer_screen from './src/Drawer';
import Recent from './src/home/Recent';
import Priority from './src/home/Priority';
import All from './src/home/All';
import All_Settings from './src/home/l';
import Profile from './src/home/p';
import k from './src/home/l';
import K from './src/home/l';
import Home1 from './src/components/Home1';



const Stack = createStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      
      <Stack.Navigator>
       
        <Stack.Screen name="Login" component={Login_screen} 
        options={{headerShown:false}} />
        <Stack.Screen name="Forgot_password" component={Forgot_pasword} 
        options={{headerShown:false}} />
        <Stack.Screen name="drawer" component={Drawer_screen} 
        options={{headerShown:false}} />
         <Stack.Screen name="demo" component={Demo} 
        options={{headerShown:false}} />
         <Stack.Screen name="recent" component={Recent} 
        options={{headerShown:false}} />
        <Stack.Screen name="priority" component={Priority} 
        options={{headerShown:false}} />
        <Stack.Screen name="All" component={All} 
        options={{headerShown:false}} />
        <Stack.Screen name="l" component={All_Settings} 
        options={{headerShown:false}} />
        <Stack.Screen name="p" component={Profile} 
        options={{headerShown:false}} />
        <Stack.Screen name="k" component={K} 
        options={{headerShown:false}} />
        {/* <Stack.Screen name="Home1" component={Home1} 
        options={{headerShown:false}} /> */}
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};