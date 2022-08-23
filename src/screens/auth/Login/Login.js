import React, {useState} from 'react';
import {Pressable, SafeAreaView, ToastAndroid, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

/* {User Defined External Components} */
import {storeAsyncObject} from '../../../components/AsyncStorage';
import CustomButton from '../../../components/buttons/CustomButton';
import SocialButton from '../../../components/buttons/SocialButton';
import BasicText from '../../../components/text/BasicText';
import Heading, {headingSize} from '../../../components/text/Heading';
import CustomTextInput from '../../../components/textInput/CustomTextInput';

/* {Constants & utils} */
import {
  apple_icon,
  facebook_icon,
  google_icon,
  loginUrl,
} from '../../../constants/constants';
import variables, {EMAIL_REGEX, Log, PASSWORD_REGEX} from '../../../util/utils';
import styles from './style';

/* {Api Calling Component} */
import request from '../../../util/request';

function Login({navigation}) {
  /* {User defined States for Storing credentials} */
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [errors, setErrors] = useState({email: '', password: ''});

  /* {Login Handler Method} */
  const _onLoginHandler = async () => {
    Log('Username:', username);
    Log('Password:', password);

    if (username && password) {
      setLoading(true);
      let data = {
        email: username,
        password: password,
        device_token: 'zasdcvgtghnkiuhgfde345tewasdfghjkm',
      };
      const res = await request.post(loginUrl, data);
      const {meta} = res.data;
      if (meta.status === 200) {
        Log('DATA===>', res.data.data.user);
        await storeAsyncObject('@user', res.data.data.user);
        ToastAndroid.show('User Logged in Successfully!', ToastAndroid.SHORT);
        setLoading(false);

        navigation.replace('Home');
      } else {
        Log('DATA===>', meta.message);
        ToastAndroid.show('Error in Logging User !', ToastAndroid.SHORT);
        setLoading(false);
      }
    } else {
      setErrors(state => ({
        email: 'Email Field is empty',
        password: 'Password field is empty',
      }));
    }
  };
  const EmailValidation = e => {
    if (!EMAIL_REGEX.test(e)) {
      setErrors(state => ({
        ...state,
        email: 'Please provide a valid email.',
      }));
      setDisabled(true);

      return false;
    } else {
      setDisabled(false);
      setUsername(e);
      setErrors(state => ({
        ...state,
        email: '',
      }));
      return true;
    }
  };
  const passwordValidation = e => {
    if (e.length < 6) {
      setErrors(state => ({
        ...state,
        password: 'Password must be at least six characters long.',
      }));
      setDisabled(true);
      return false;
    } else {
      setPassword(e);
      setDisabled(false);

      setErrors(state => ({
        ...state,
        password: '',
      }));
      return true;
    }
  };

  return (
    <LinearGradient
      colors={variables.primaryGradient}
      style={styles.linearGradient}
      start={{x: 0, y: -0.05}}
      end={{x: 1, y: 0}}>
      {/* { Heading & Description Component } */}
      <Heading size={headingSize.MEDIUM}>{`Hello Again!`}</Heading>
      <BasicText
        size={variables.fontSizePMedium}
        style={
          styles.topDescription
        }>{`Chance to get your life better`}</BasicText>

      {/* { Custom TextInputs Component } */}

      <CustomTextInput
        placeholder={`Enter Username`}
        onChangeText={e => {
          EmailValidation(e);
        }}
        validationError={errors.email}
      />
      <CustomTextInput
        placeholder={`Enter Password`}
        password={true}
        onChangeText={e => {
          passwordValidation(e);
        }}
        validationError={errors.password}
      />

      {/* { Forget Password } */}
      <Pressable
        style={{width: '80%'}}
        onPress={() => {
          Log('FOrget Password');
        }}>
        <BasicText
          size={variables.getSize(12)}
          style={styles.forgetPassword}>{`Recovery Password`}</BasicText>
      </Pressable>

      {/* { Login Button Component } */}
      <CustomButton
        loading={loading}
        disabled={disabled}
        shadow={true}
        style={styles.loginButton}
        onPress={() => _onLoginHandler()}>
        {`Login`}
      </CustomButton>

      {/* { Social Authentication Section  } */}

      <BasicText
        size={variables.fontSizePSmall}
        style={styles.socialAuthText}>{`or continue with`}</BasicText>

      {/* { Social Buttons } */}
      <View style={styles.socialButtonsView}>
        <SocialButton onPress={() => {}} icon={google_icon} />
        <SocialButton onPress={() => {}} icon={apple_icon} />
        <SocialButton onPress={() => {}} icon={facebook_icon} />
      </View>

      {/* { Not a member?  } */}
      <BasicText size={variables.getSize(12)} style={styles.notaMember}>
        {`Not a member? `}
        <BasicText
          size={variables.getSize(12)}
          style={{
            color: variables.colorButton,
          }}
          fontFamily={variables.PoppinsSemiBold}>{` Register Now`}</BasicText>
      </BasicText>
    </LinearGradient>
  );
}

export default Login;
