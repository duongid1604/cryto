import React from 'react';
import {Image} from 'react-native';
import {Images} from '../../../assets';
import {useStyle} from '../styles.ts';

const BackgroundImage = () => {
  //Hook
  const {styles} = useStyle();

  //Render UI
  return (
    <>
      <Image
        source={Images.login1}
        style={[styles.loginBackground, styles.loginBg1]}
      />
      <Image
        source={Images.login2}
        style={[styles.loginBackground, styles.loginBg2]}
      />
      <Image
        source={Images.login3}
        style={[styles.loginBackground, styles.loginBg3]}
      />
      <Image
        source={Images.login4}
        style={[styles.loginBackground, styles.loginBg4]}
      />
      <Image
        source={Images.login5}
        style={[styles.loginBackground, styles.loginBg5]}
      />
    </>
  );
};

export default BackgroundImage;
