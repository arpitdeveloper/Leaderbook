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
import New_lead from "./src/Main/New_lead";

import Detail from "./src/Main/Detail";
import Basic_detail from "./src/Main/Detail_folder/Basic_detail";
import Profile from "./src/Main/Detail_folder/Profile";
import Related from "./src/Main/Detail_folder/Related";
import Lead_activity from "./src/Main/Detail_folder/Lead_activity";
import Edit_lead_detail from "./src/Main/Detail_folder/Edit_lead_detail";
import Comments from "./src/Main/Detail_folder/Comments";
import Appi from "./src/Services/Modal";
import Page from "./src/Main/Detail_folder/Related_page/Page";
import tpage from "./src/Main/Detail_folder/Related_page/Tpage";
import Npage from "./src/Main/Detail_folder/Related_page/Npage";
import Apage from "./src/Main/Detail_folder/Related_page/Apage";

import ChatScreen from "./src/components/recent_chats/Chat";
import Demo from "./src/components/Demo";
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
        <Stack.Screen name={ScreenNames.NEW_LEADS} component={New_lead} />
        <Stack.Screen name={ScreenNames.DETAIL} component={Detail} />
        <Stack.Screen name={ScreenNames.BASIC_DETAIL} component={Basic_detail} />
        <Stack.Screen name={ScreenNames.PROFILE} component={Profile} />
        <Stack.Screen name={ScreenNames.RELATED} component={Related} />
        <Stack.Screen name={ScreenNames.LEAD_ACTIVITY} component={Lead_activity} />
        <Stack.Screen name={ScreenNames.EDIT_LEAD_DETAIL} component={Edit_lead_detail} />
        <Stack.Screen name={ScreenNames.Comments} component={Comments} />
        <Stack.Screen name={ScreenNames.Page} component={Page} />
        <Stack.Screen name={ScreenNames.TPage} component={tpage} />
        <Stack.Screen name={ScreenNames.NPage} component={Npage} />
        <Stack.Screen name={ScreenNames.APage} component={Apage} />
        <Stack.Screen name={"chat"} component={ChatScreen}  />
        <Stack.Screen name={"demo"} component={Demo}  />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
