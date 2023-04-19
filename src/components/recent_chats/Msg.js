import React, { useState, useCallback, useEffect } from 'react'

import { GiftedChat,InputToolbar } from 'react-native-gifted-chat'
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

import {
  Entypo,
  Feather,
  AntDesign,
  SimpleLineIcons,
  Ionicons,
  Octicons,
  FontAwesome,
  FontAwesome5,
  EvilIcons,
  MaterialIcons,
  Foundation,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  SafeAreaView,
  Dimensions,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Colors } from '../../constant/colors';


export function Msg() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  const customtInputToolbar = props => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: "red",
          borderTopColor: "#E8E8E8",
          borderTopWidth: 1,
          
        }}
      />
    );
  };

  return (
   
        
      <GiftedChat
      renderInputToolbar={props => customtInputToolbar(props)}
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
    
    
  )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "white",
      },
    
      header: {
        height: height * 0.12,
        backgroundColor: Colors.MAIN_COLOR,
        alignItems: "center",
    
        // marginTop: 25,
        flexDirection: "row",
        marginBottom: "3%",
      },
      headertxt1: {
        fontSize: 16,
        marginStart: "5%",
        marginTop: "7%",
        flex: 0.5,
      },
    
      headertxt2: {
        color: "white",
        fontWeight: "500",
        fontSize: 22,
        marginTop: "7%",
      },
    
      
})