import React from 'react';
import {View} from 'react-native';
import {useStyle} from './styles.ts';
import BackgroundImage from './components/background.tsx';
import LoginForm from './components/loginForm.tsx';

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
