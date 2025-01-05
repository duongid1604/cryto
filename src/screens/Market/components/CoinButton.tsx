import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomText from '../../../components/CustomText.tsx';
import {useTranslation} from 'react-i18next';
import {Colors} from '../../../constants/colors.ts';

type Props = {
  name: string;
  isActive: boolean;
};

const CoinButton = (props: Props) => {
  // Props
  const {name, isActive} = props;

  // Hook
  const {t} = useTranslation();

  // Render UI
  return (
    <View style={[styles.container, isActive && styles.activeContainer]}>
      <CustomText style={[styles.text, isActive && styles.activeText]}>
        {t(name)}
      </CustomText>
    </View>
  );
};

export default CoinButton;

const styles = StyleSheet.create({
  container: {
    width: 78,
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
