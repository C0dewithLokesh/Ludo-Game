import React, { memo, useMemo } from 'react';
import { View } from 'react-native';
import { ArrowRightIcon, StarIcon } from 'react-native-heroicons/outline';
import { RFValue } from 'react-native-responsive-fontsize';
import tw from 'twrnc';
import { ArrowSpot, SafeSpots, StarSpots } from '../helpers/PlotData';

const Cell = ({color, id}: {color: string; id: number}) => {
  const isSafeSpot = useMemo(() => SafeSpots.includes(id), [id]);
  const isStarSpot = useMemo(() => StarSpots.includes(id), [id]);
  const isArrowSpot = useMemo(() => ArrowSpot.includes(id), [id]);

  return (
    <View
      className="w-full h-full border-[0.4px] items-center justify-center"
      style={tw`bg-[${isSafeSpot! ? color : 'white'}]`}>
      {isStarSpot && <StarIcon size={20} color={'grey'} />}
      {isArrowSpot && (
        <ArrowRightIcon
          size={RFValue(12)}
          style={{
            transform: [
              {
                rotate:
                  id === 38
                    ? '180deg'
                    : id === 25
                    ? '90deg'
                    : id === 51
                    ? '-90deg'
                    : '0deg',
              },
            ],
          }}
          color={'grey'}
        />
      )}
      <View className="absolute top-0 left-0 right-0 bottom-0 z-[99]">
        {/* <Pile
          cell={true}
          player={2}
          onPress={() => null}
          pieceId={id}
          color={Colors.green}
        /> */}
      </View>
    </View>
  );
};

export default memo(Cell);
