import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import CustomText from '../../../components/CustomText.tsx';
import {useTranslation} from 'react-i18next';
import {Colors} from '../../../constants/colors.ts';

type Props = {
  name: string;
  isActive: boolean;
  length: number;
};

const {width} = Dimensions.get('window');

const CoinButton = (props: Props) => {
  // Props
  const {name, isActive, length} = props;

  //Constant
  const containerWidth = width / length - 10;

  // Hook
  const {t} = useTranslation();

  // Render UI
  return (
    <View
      style={[
        styles.container,
        {width: containerWidth},
        isActive && styles.activeContainer,
      ]}>
      <CustomText style={[styles.text, isActive && styles.activeText]}>
        {t(name)}
      </CustomText>
    </View>
  );
};

export default CoinButton;

const styles = StyleSheet.create({
  container: {
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: Colors.inactiveBackground,
  },
  activeContainer: {
    backgroundColor: Colors.purple,
  },
  text: {
    fontSize: 13,
    fontWeight: 500,
    lineHeight: 15,
    color: Colors.inactiveText,
  },
  activeText: {
    color: Colors.primary,
  },
});
