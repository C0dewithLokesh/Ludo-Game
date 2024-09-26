import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import Cell from './Cell';

const VerticalPath = React.memo(
  ({color, cells}: {color: string; cells: number[]}) => {
    const groupedCells = useMemo(() => {
      const groups = [];
      for (let i = 0; i < cells?.length; i += 3) {
        groups.push(cells.slice(i, i + 3));
      }
      return groups;
    }, [cells]);

    return (
      <View className="flex flex-row items-center w-[20%] h-full">
        <View className="flex w-full h-full">
          {groupedCells.map((group, groupIndex) => (
            <View
              key={groupIndex}
              className="flex flex-row w-[33.35%] items-center h-[16.7%]">
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

export default VerticalPath;
