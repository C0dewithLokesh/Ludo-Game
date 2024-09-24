import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';
import MenuIcon from '../assets/images/menu.png';
import Dice from '../components/Dice';
import Wrapper from '../components/Wrapper';
import {Colors} from '../constants/Colors';
import {deviceHeight} from '../constants/Scaling';

const LudoBoardScreen = () => {
  return (
    <Wrapper>
      <TouchableOpacity className="absolute top-[60px] left-5 border">
        <Image source={MenuIcon} className="w-[30px] h-[30px]" />
      </TouchableOpacity>

      <View className="w-full" style={tw`h-[${deviceHeight * 0.5}px]`}>
        <View className="flex flex-row items-center justify-between px-[30px]">
          <Dice color={Colors.green} />
        </View>
      </View>
    </Wrapper>
  );
};

export default LudoBoardScreen;
