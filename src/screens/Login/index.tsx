import React from 'react';
import {View} from 'react-native';
import {useStyle} from './styles.ts';
import BackgroundImage from './components/Background.tsx';
import LoginForm from './components/LoginForm.tsx';

const Login = () => {
  //Hook
  const {styles} = useStyle();

  //Render UI
  return (
    <View style={styles.container}>
      <BackgroundImage />
      <LoginForm />
    </View>
  );
};

export default Login;
