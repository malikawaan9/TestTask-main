import {StyleSheet} from 'react-native';
import variables from '../../../util/utils';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topDescription: {
    width: '45%',
    textAlign: 'center',
    paddingBottom: '5%',
  },
  loginButton: {marginTop: '7.5%'},
  forgetPassword: {
    textAlign: 'right',
    color: variables.placeHolderColor,
  },
  socialAuthText: {
    textAlign: 'center',
    color: variables.placeHolderColor,
    marginVertical: '5%',
  },
  socialButtonsView: {
    flexDirection: 'row',
    width: '75%',
    justifyContent: 'space-evenly',
  },
  notaMember: {
    textAlign: 'center',
    color: variables.placeHolderColor,
    marginVertical: '5%',
    letterSpacing: 0.25,
  },
});
export default styles;
