import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';
import MenuIcon from '../assets/images/menu.png';
import Dice from '../components/Dice';
import Pocket from '../components/Pocket';
import Wrapper from '../components/Wrapper';
import {Colors} from '../constants/Colors';
import {deviceHeight} from '../constants/Scaling';

const LudoBoardScreen = () => {
  return (
    <Wrapper>
      <TouchableOpacity className="absolute top-[60px] left-5 border">
        <Image source={MenuIcon} className="w-[30px] h-[30px]" />
      </TouchableOpacity>

      <View
        className="w-full flex items-center"
        style={tw`h-[${deviceHeight * 0.6}px]`}>
        <View className="flex flex-row items-center justify-between px-[30px] w-full">
          <Dice color={Colors.green} />
          <Dice color={Colors.yellow} rotate />
        </View>

        <View className="w-full flex-1 p-[10px] bg-fuchsia-500">
          <View className="w-full h-[40%] justify-between flex-row bg-[#ccc]">
            <Pocket color={Colors.green} player={2} />
          </View>
        </View>

        <View className="flex flex-row items-center justify-between px-[30px] w-full">
          <Dice color={Colors.red} />
          <Dice color={Colors.blue} rotate />
        </View>
      </View>
    </Wrapper>
  );
};

export default LudoBoardScreen;
