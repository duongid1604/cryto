import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomText from './CustomText.tsx';

const DevelopmentScreen = () => {
  return (
    <View style={styles.container}>
      <CustomText>Development in progress...</CustomText>
    </View>
  );
};

export default DevelopmentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
