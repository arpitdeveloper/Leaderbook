import React from 'react';
import {StyleSheet, Image, View, TouchableOpacity, Text} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Colors } from '../constant/colors';

export default function Header({
  label,
  rightIcon,
  leftIcon,
  onRightPress,
  onLeftPress,
  showLeftIconBorder,
  showRightIconBorder,

}) {
  return (
    <View style={styles.headerView}>
      {leftIcon ? (
        <TouchableOpacity
          hitSlop={{top: 70, right: 70, left: 70, bottom: 70}}
          style={showLeftIconBorder !== false && styles.penIconView}
          onPress={onLeftPress}>
          <Image source={leftIcon} />
        </TouchableOpacity>
      ) : (
        <View />
      )}

      <Text style={styles.headerTitle}>{label}</Text>
      {rightIcon ? (
        <TouchableOpacity
          // style={styles.penIconView}
          style={showRightIconBorder !== false && styles.penIconView}

          onPress={onRightPress}
          hitSlop={{top: 50, right: 50, left: 50, bottom: 50}}>
          <Image source={rightIcon} 
          
          style={showRightIconBorder == false && {height:35, width:35}}
          />
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerView: {
    marginTop: hp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp('100%'),
height:hp('8%'),
backgroundColor:Colors.MAIN_COLOR
  },
  headerTitle: {
    // fontFamily: Fonts.poppinsMeduim,
    fontSize: wp('5.61%'),
    color: 'white',
    flex:1,
    textAlign:'center'
  },
  penIconView: {
    backgroundColor: '#4E4E50',
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('4.21%'),
    width: wp('9.58%'),
    borderRadius: 8,
  },
});
