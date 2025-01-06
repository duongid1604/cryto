import React from 'react';
import {ActivityIndicator, Image, StyleSheet, View} from 'react-native';
import {Images} from '../../assets';
import {Colors} from '../../constants/colors.ts';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Images.logo} />
      <ActivityIndicator color={Colors.primary} size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue,
    gap: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default SplashScreen;
