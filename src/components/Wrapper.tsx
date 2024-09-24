import React from 'react';
import {ImageBackground, SafeAreaView} from 'react-native';
import tw from 'twrnc';
import BG from '../assets/images/bg.jpg';
import {deviceHeight, deviceWidth} from '../constants/Scaling';

const Wrapper = ({
  children,
  containerStyle,
}: {
  children: React.ReactNode;
  containerStyle?: string;
}) => {
  return (
    <ImageBackground
      source={BG}
      resizeMode="cover"
      className="flex-1 justify-center items-center">
      <SafeAreaView
        className="flex items-center justify-center"
        style={[
          tw`w-[${deviceWidth}px] h-[${deviceHeight}px] ${
            containerStyle || ''
          }`,
        ]}>
        {children}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Wrapper;
