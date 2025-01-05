import {Text, TextProps} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet} from 'react-native';

const CustomText: React.FC<TextProps> = ({style, ...props}) => {
  return <Text style={[styles.text, style]} {...props} />;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto-Regular',
  },
});
export default CustomText;
