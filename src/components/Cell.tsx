import React, {memo} from 'react';
import {Text, View} from 'react-native';
import tw from 'twrnc';
import {Colors} from '../constants/Colors';
import Pile from './Pile';

const Cell = ({color, id}: {color: string; id: number}) => {
  return (
    <View
      className="w-full h-full border-[0.4px] items-center justify-center"
      style={tw`bg-[${color}]`}>
      <View className="absolute top-0 left-0 right-0 bottom-0 z-[99]">
        {/* <Pile
          cell={true}
          player={2}
          onPress={() => null}
          pieceId={id}
          color={Colors.green}
        /> */}
      </View>
      <Text>{id}</Text>
    </View>
  );
};

export default memo(Cell);
