import React, {FC} from 'react';
import {View} from 'react-native';
import tw from 'twrnc';
import {Colors} from '../constants/Colors';
import Pile from './Pile';

interface PocketProps {
  color: string;
  player: 2;
}

interface PlotProps {
  color: string;
  player: 2;
  pieceNo: number;
}

const Pocket: FC<PocketProps> = React.memo(({color, player}) => {
  return (
    <View
      className="w-[40%] h-full items-center justify-center"
      style={tw`bg-[${color}]`}>
      <View
        className="bg-white w-[70%] h-[70%] p-[15px] flex items-center justify-between"
        style={tw`border-[0.4px] border-[${Colors.borderColor}]`}>
        <View className="flex flex-row items-center justify-between w-full h-[40%]">
          <Plot pieceNo={0} player={player} color={color} />
          <Plot pieceNo={1} player={player} color={color} />
        </View>
        <View className="flex flex-row items-center justify-between w-full h-[40%]">
          <Plot pieceNo={0} player={player} color={color} />
          <Plot pieceNo={1} player={player} color={color} />
        </View>
      </View>
    </View>
  );
});

const Plot: FC<PlotProps> = ({color, player, pieceNo}) => {
  return (
    <View className="w-[36%] h-[80%] rounded-full" style={tw`bg-[${color}]`}>
      <Pile color={color} player={player} />
    </View>
  );
};

export default Pocket;
