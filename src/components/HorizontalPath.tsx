import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import Cell from './Cell';

const HorizontalPath = React.memo(
  ({color, cells}: {color: string; cells: number[]}) => {
    const groupedCells = useMemo(() => {
      const groups = [];
      for (let i = 0; i < cells?.length; i += 6) {
        groups.push(cells.slice(i, i + 6));
      }
      return groups;
    }, [cells]);

    return (
      <View className="flex flex-row items-center w-[40%] h-full">
        <View className="flex items-start w-full h-full">
          {groupedCells.map((group, groupIndex) => (
            <View
              key={groupIndex}
              className="flex flex-row items-center w-[16.7%] h-[33.3%]">
              {group.map(id => (
                <Cell key={id} id={id} color={color} />
              ))}
            </View>
          ))}
        </View>
      </View>
    );
  },
);

export default HorizontalPath;
