import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {Colors} from '../constants/colors.ts';

type Props = {
  height: number;
};

const Skeleton = ({height}: Props) => {
  const shimmerValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(shimmerValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [shimmerValue]);

  const shimmerAnimation = shimmerValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.skeleton,
          {
            opacity: shimmerAnimation,
            height,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  skeleton: {
    width: '100%',
    backgroundColor: Colors.gray,
    borderRadius: 6,
    marginBottom: 10,
  },
});

export default Skeleton;
