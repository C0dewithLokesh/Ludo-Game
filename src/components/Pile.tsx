import React from 'react';
import {
  Animated,
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BackgroundImage} from '../helpers/GetIcon';

const Pile = ({color, player}: {color: string; player: 2}) => {
  const pileIcon: ImageSourcePropType | null = BackgroundImage.GetImage(color);

  return (
    <TouchableOpacity className="flex-1 border-white items-center justify-center">
      <View className="w-[15px] h-[15px] absolute border-2 border-black rounded-[25px] items-center justify-center">
        <View className=''>
          <Animated.View style={[]}>
            
          </Animated.View>
        </View>
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
