import React, {useEffect, useMemo, useRef} from 'react';
import {
  Animated,
  Easing,
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Circle, Svg} from 'react-native-svg';
import {BackgroundImage} from '../helpers/GetIcon';

const Pile = ({color, player}: {color: string; player: 2}) => {
  const rotation = useRef(new Animated.Value(0)).current;
  const pileIcon: ImageSourcePropType | null = BackgroundImage.GetImage(color);

  useEffect(() => {
    const rotateAnimation = Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );

    rotateAnimation.start();

    return () => rotateAnimation.stop();
  }, [rotation]);

  const rotateInterpolate = useMemo(
    () =>
      rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '369deg'],
      }),
    [rotation],
  );

  return (
    <TouchableOpacity className="flex-1 border-white items-center justify-center">
      <View className="w-[15px] h-[15px] absolute rounded-[25px] items-center justify-center">
        <Animated.View style={{transform: [{rotate: rotateInterpolate}]}}>
          <Svg width={'18'} height={'18'}>
            <Circle
              cx="9"
              cy="9"
              r="8"
              stroke={'white'}
              strokeWidth="2"
              strokeDasharray="4 4"
              strokeDashoffset="0"
              fill={'transparent'}
            />
          </Svg>
        </Animated.View>
      </View>
      {pileIcon && (
        <Image
          source={pileIcon}
          className="w-[32px] h-[32px] absolute top-[-14px] left-[0.5px]"
        />
      )}
    </TouchableOpacity>
  );
};

export default Pile;
