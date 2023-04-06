import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login_screen from './src/Login';
import Forgot_pasword from './src/ForgotPassword';
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
import { ScreenNames } from './src/constant/ScreenNames';



const Stack = createStackNavigator();

export default function App () {

  return (
    <NavigationContainer>
      
      <Stack.Navigator screenOptions={{headerShown:false}}>
       
        <Stack.Screen name={ScreenNames.LOGIN} component={Login_screen} />
        <Stack.Screen name={ScreenNames.FORGOT_PASSWORD} component={Forgot_pasword} />
        <Stack.Screen name="drawer" component={Drawer_screen} />
         <Stack.Screen name="demo" component={Demo} />
         <Stack.Screen name="recent" component={Recent}/>
        <Stack.Screen name="priority" component={Priority} />
        <Stack.Screen name="All" component={All} />
        <Stack.Screen name="l" component={All_Settings} />
        <Stack.Screen name="p" component={Profile}/>
        <Stack.Screen name="k" component={K}/>
        {/* <Stack.Screen name="Home1" component={Home1} 
        options={{headerShown:false}} /> */}
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};