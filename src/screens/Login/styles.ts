import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors.ts';

const {width, height} = Dimensions.get('window');

export const useStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
    },
    //Background
    loginBackground: {
      position: 'absolute',
      width: width,
      height: height,
      resizeMode: 'cover',
    },
    loginBg1: {
      zIndex: 1,
    },
    loginBg2: {
      zIndex: 4,
    },
    loginBg3: {
      zIndex: 3,
    },
    loginBg4: {
      zIndex: 2,
    },
    loginBg5: {
      zIndex: 4,
      height: 500,
      bottom: 0,
    },

    //Login form
    logoContainer: {
      alignItems: 'center',
      gap: 10,
    },
    logo: {
      width: 55,
      height: 55,
    },
    signin: {
      marginTop: 20,
      fontWeight: 900,
      fontSize: 23,
      lineHeight: 30,
      color: Colors.primary,
    },
    pleaseSignin: {
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 24,
      color: Colors.secondary,
    },
    loginFormContainer: {
      zIndex: 6,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      marginHorizontal: 10,
    },
    inputForm: {
      marginVertical: 50,
    },
    input: {
      width: '100%',
      height: 47,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderColor: 'rgba(255, 255, 255, 0.2)',
      marginBottom: 5,
      borderRadius: 6,
    },
    textInput: {
      color: Colors.primary,
      fontFamily: 'Roboto-Regular',
    },
    inputIcon: {
      width: 16,
      height: 17,
      marginHorizontal: 5,
    },
    functionalContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 5,
    },
    rememberMe: {
      marginLeft: 5,
      color: Colors.primary,
      fontSize: 14,
      lineHeight: 21,
      fontWeight: 500,
    },
    forgotPassword: {
      color: Colors.primary,
      fontSize: 14,
      lineHeight: 21,
      fontWeight: 500,
    },
    signinButton: {
      width: '100%',
      height: 45,
      backgroundColor: Colors.gray,
      borderRadius: 6,
    },
    signinButtonText: {
      textTransform: 'uppercase',
      textAlign: 'center',
      color: Colors.blue,
      fontWeight: 700,
      fontSize: 14,
      lineHeight: 16,
    },
    buttonContainer: {
      width: '100%',
      alignItems: 'center',
    },
    dontHaveAccount: {
      flexDirection: 'row',
      gap: 3,
      marginVertical: 20,
    },
    dontHaveAccountText: {
      fontSize: 14,
      lineHeight: 24,
      color: Colors.primary,
    },
    singUp: {
      fontSize: 14,
      lineHeight: 24,
      color: Colors.primary,
      fontWeight: 700,
      textTransform: 'uppercase',
      textAlign: 'center',
    },
  });

  return {styles};
};
