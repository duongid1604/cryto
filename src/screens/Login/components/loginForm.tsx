import React, {useState} from 'react';
import {useStyle} from '../styles.ts';
import {Image, TouchableWithoutFeedback, View} from 'react-native';
import {Button, CheckBox, Icon, IconProps, Input} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import {Icons, Images} from '../../../assets';
import {Colors} from '../../../constants/colors.ts';
import CustomText from '../../../components/CustomText.tsx';

const LoginForm = () => {
  //Hook
  const {styles} = useStyle();
  const {t} = useTranslation();

  //State
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);

  //Function
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const onCheckedChange = (isChecked: boolean) => {
    setChecked(isChecked);
  };

  //Render UI
  const renderIcon = (props: IconProps): React.ReactElement => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon
        {...props}
        fill={Colors.primary}
        name={secureTextEntry ? 'eye-off-outline' : 'eye-outline'}
      />
    </TouchableWithoutFeedback>
  );

  return (
    <View style={styles.loginFormContainer}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={Images.logo} />
        <CustomText style={styles.signin}>{t('signin')}</CustomText>
        <CustomText style={styles.pleaseSignin}>
          {t('please_signin')}
        </CustomText>
      </View>

      <View style={styles.inputForm}>
        <Input
          style={styles.input}
          textStyle={styles.textInput}
          value={email}
          placeholder="Email"
          onChangeText={nextValue => setEmail(nextValue)}
          accessoryLeft={()=> <Image style={styles.inputIcon} source={Icons.person}/>}
          placeholderTextColor={Colors.secondary}
        />
        <Input
          style={styles.input}
          textStyle={styles.textInput}
          value={password}
          placeholder="Password"
          accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
          onChangeText={nextValue => setPassword(nextValue)}
          accessoryLeft={()=> <Image style={styles.inputIcon} source={Icons.lock}/>}
          placeholderTextColor={Colors.secondary}
        />
        <View style={styles.functionalContainer}>
          <CheckBox
            checked={checked}
            onChange={value => onCheckedChange(value)}>
            {() => (
              <CustomText style={styles.rememberMe}>
                {t('remember_me')}
              </CustomText>
            )}
          </CheckBox>
          <CustomText style={styles.forgotPassword}>
            {t('forgot_password')}
          </CustomText>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button style={styles.signinButton}>
          {() => (
            <CustomText style={styles.signinButtonText}>
              {t('signin')}
            </CustomText>
          )}
        </Button>

        <View style={styles.dontHaveAccount}>
          <CustomText style={styles.dontHaveAccountText}>
            {t('dont_have_account')}
          </CustomText>
          <CustomText style={styles.singUp}>{t('signup')}</CustomText>
        </View>
      </View>
    </View>
  );
};

export default LoginForm;
