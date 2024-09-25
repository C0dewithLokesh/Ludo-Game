import LottieView from 'lottie-react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Easing,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DiceRoll from '../assets/animation/diceroll.json';
import Arrow from '../assets/images/arrow.png';
import {BackgroundImage} from '../helpers/GetIcon';

interface DiceProps {
  color: string;
  rotate?: boolean;
  player?: string;
  data?: any;
}

const Dice: React.FC<DiceProps> = React.memo(
  ({color, rotate, player, data}) => {
    const diceNo = 4;
    const pileIcon: ImageSourcePropType | null =
      BackgroundImage.GetImage(color);
    const diceIcon: ImageSourcePropType | null =
      BackgroundImage.GetImage(diceNo);
    const arrowAnim = useRef(new Animated.Value(0)).current;

    const [diceRolling, setDiceRolling] = useState(false);

    useEffect(() => {
      const animateArrow = () => {
        Animated.loop(
          Animated.sequence([
            Animated.timing(arrowAnim, {
              toValue: 10,
              duration: 600,
              easing: Easing.out(Easing.ease),
              useNativeDriver: true,
            }),
            Animated.timing(arrowAnim, {
              toValue: -1,
              duration: 600,
              easing: Easing.in(Easing.ease),
              useNativeDriver: true,
            }),
          ]),
        ).start();
      };

      animateArrow();
    }, []);

    return (
      <View
        className={`flex flex-row items-center justify-center ${
          rotate ? 'scale-x-[-1]' : 'scale-x-[1]'
        }`}>
        <View className="border-[3px] border-r-0 border-[#f0ce2c]">
          <LinearGradient
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            colors={['#0052be', '#5f9fcb', '#97c6c9']}>
            <View className="px-[3px] py-[1px]">
              {pileIcon && (
                <Image source={pileIcon} className="w-[35px] h-[35px]" />
              )}
            </View>
          </LinearGradient>
        </View>

        <View className="border-[3px] border-[#aac8ab] rounded-[10px] border-l-[3px]">
          <LinearGradient
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            colors={['#aac8ab', '#aac8ab', '#aac8ab']}
            // className="border-[3px] border-l-[3px] border-[#f0ce2c] flex items-center justify-center"
          >
            <View className="bg-[#e8c0c1] rounded-[5px] w-[55px] h-[55px] px-2 flex justify-center items-center">
              <TouchableOpacity>
                {diceIcon && (
                  <Image source={diceIcon} className="h-[45px] w-[45px]" />
                )}
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>

        {diceRolling && (
          <Animated.View style={{transform: [{translateX: arrowAnim}]}}>
            <Image source={Arrow} className="w-[50px] h-[30px]" />
          </Animated.View>
        )}

        {diceRolling && (
          <LottieView
            source={DiceRoll}
            loop={false}
            autoPlay
            cacheComposition={true}
            hardwareAccelerationAndroid
            style={{
              height: 80,
              width: 80,
              zIndex: 99,
              top: -25,
              left: 35,
              position: 'absolute',
            }}
          />
        )}
      </View>
    );
  },
);

export default Dice;
