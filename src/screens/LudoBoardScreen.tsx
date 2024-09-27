import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';
import MenuIcon from '../assets/images/menu.png';
import Dice from '../components/Dice';
import FourTriangles from '../components/FourTriangles';
import HorizontalPath from '../components/path/HorizontalPath';
import VerticalPath from '../components/path/VerticalPath';
import Pocket from '../components/Pocket';
import Wrapper from '../components/Wrapper';
import {Colors} from '../constants/Colors';
import {deviceHeight} from '../constants/Scaling';
import {Plot1Data, Plot2Data, Plot3Data, Plot4Data} from '../helpers/PlotData';

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

        <View className="w-full flex-1 p-[10px]">
          <View className="w-full h-[40%] justify-between flex-row bg-[#ccc]">
            <Pocket color={Colors.green} player={2} />
            <VerticalPath color={Colors.yellow} cells={Plot2Data} />
            <Pocket color={Colors.yellow} player={2} />
          </View>

          <View className="flex flex-row items-center justify-between bg-[#1E5162] w-full h-[20%]">
            <HorizontalPath color={Colors.green} cells={Plot1Data} />
            <FourTriangles />
            <HorizontalPath color={Colors.blue} cells={Plot3Data} />
          </View>

          <View className="w-full h-[40%] justify-between flex-row bg-[#ccc]">
            <Pocket color={Colors.red} player={2} />
            <VerticalPath color={Colors.red} cells={Plot4Data} />
            <Pocket color={Colors.blue} player={2} />
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
