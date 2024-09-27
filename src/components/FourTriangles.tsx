import LottieView from 'lottie-react-native';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Polygon, Svg} from 'react-native-svg';
import tw from 'twrnc';
import Fireworks from '../assets/animation/firework.json';
import {Colors} from '../constants/Colors';

const FourTriangles = () => {
  const size = 300;
  const [blast, setBlast] = useState(false);

  return (
    <View
      className="flex items-center justify-center border-[0.8px] border-b-0 border-r-0 w-[20%] h-full overflow-hidden bg-white"
      style={tw`border-[${Colors.borderColor}]`}>
      {blast && (
        <LottieView
          source={Fireworks}
          autoPlay
          loop
          hardwareAccelerationAndroid
          speed={1}
          style={styles.lottieView}
        />
      )}
      <Svg height={size} width={size - 5}>
        <Polygon
          points={`0, 0, ${size / 2}, ${size / 2}, ${size}, 0`}
          fill={Colors.yellow}
        />
        <Polygon
          points={`${size}, 0, ${size}, ${size}, ${size / 2}, ${size / 2}`}
          fill={Colors.blue}
        />
        <Polygon
          points={`0, ${size}, ${size / 2}, ${size / 2}, ${size}, ${size}`}
          fill={Colors.red}
        />
        <Polygon
          points={`0, 0, ${size / 2}, ${size / 2}, 0, ${size}`}
          fill={Colors.green}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  lottieView: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
  },
});

export default FourTriangles;
