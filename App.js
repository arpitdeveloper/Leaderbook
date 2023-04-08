import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login_screen from "./src/Login";
import Forgot_pasword from "./src/ForgotPassword";
import Drawer_screen from "./src/Drawer";
import Recent from "./src/Main/Recent";
import Priority from "./src/Main/Priority";
import All from "./src/Main/All";
import { ScreenNames } from "./src/constant/ScreenNames";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ScreenNames.LOGIN} component={Login_screen} />
        <Stack.Screen name={ScreenNames.FORGOT_PASSWORD} component={Forgot_pasword}/>
        <Stack.Screen name={ScreenNames.DRAWER} component={Drawer_screen} />
        <Stack.Screen name={ScreenNames.RECENT} component={Recent} />
        <Stack.Screen name={ScreenNames.PRIORITY} component={Priority} />
        <Stack.Screen name={ScreenNames.ALL} component={All} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
