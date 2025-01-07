import React, {useState} from 'react';
import {useStyle} from '../styles.ts';
import {
  ActivityIndicator,
  Image,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Button, CheckBox, Icon, IconProps, Input} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import {Icons, Images} from '../../../assets';
import {Colors} from '../../../constants/colors.ts';
import CustomText from '../../../components/CustomText.tsx';
import {login, LoginParams} from '../../../api/auth.ts';
import {AuthContextType, useAuth} from '../../../contexts/AuthContext.tsx';
import {useMutation} from '@tanstack/react-query';

const LoginForm = () => {
  // Hook
  const {styles} = useStyle();
  const {t} = useTranslation();
  const {login: setAccessToken} = useAuth() as AuthContextType;

  // State
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  // Mutation
  const {mutate, isPending} = useMutation({
    mutationFn: (params: LoginParams) =>
      login({email: params.email, password: params.password}),
    onSuccess: data => {
      setAccessToken(data.data.accessToken);
    },
    onError: error => {
      setEmailError(error.message);
      setPasswordError(error.message);
    },
  });

  // Function
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const onCheckedChange = (isChecked: boolean) => {
    setChecked(isChecked);
  };

  const validateEmail = (value: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(value);
  };

  const validateInputs = () => {
    const errors: {email?: string; password?: string} = {};
    if (!email) {
      errors.email = 'Email cannot be empty';
    } else if (!validateEmail(email)) {
      errors.email = 'Invalid email format';
    }

    if (!password) {
      errors.password = 'Password cannot be empty';
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }

    return errors;
  };

  const handleLogin = () => {
    const errors = validateInputs();
    setEmailError(errors.email || null);
    setPasswordError(errors.password || null);

    if (!errors.email && !errors.password) {
      mutate({email, password});
    }
  };

  // Render UI
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
          accessoryLeft={() => (
            <Image style={styles.inputIcon} source={Icons.person} />
          )}
          placeholderTextColor={Colors.secondary}
        />
        {emailError && (
          <CustomText style={styles.errorText} testID="error-text">
            {emailError}
          </CustomText>
        )}
        <Input
          style={styles.input}
          textStyle={styles.textInput}
          value={password}
          placeholder="Password"
          accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
          onChangeText={nextValue => setPassword(nextValue)}
          accessoryLeft={() => (
            <Image style={styles.inputIcon} source={Icons.lock} />
          )}
          placeholderTextColor={Colors.secondary}
        />
        {passwordError && (
          <CustomText style={styles.errorText}>{passwordError}</CustomText>
        )}
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
        <Button
          style={styles.signinButton}
          onPress={handleLogin}
          testID="signin-button">
          {() =>
            isPending ? (
              <ActivityIndicator size="small" color={Colors.primary} />
            ) : (
              <CustomText style={styles.signinButtonText}>
                {t('signin')}
              </CustomText>
            )
          }
        </Button>

        <View style={styles.dontHaveAccount}>
          <CustomText style={styles.dontHaveAccountText}>
            {t('dont_have_account')}
          </CustomText>
          <CustomText style={styles.signUp}>{t('signup')}</CustomText>
        </View>
      </View>
    </View>
  );
};

export default LoginForm;
