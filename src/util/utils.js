import {Alert, Dimensions, Platform, StatusBar} from 'react-native';

const getSize = size => size;
export const width_screen = Dimensions.get('window').width;
export const height_screen = Dimensions.get('window').height;
export const width_ = Dimensions.get('screen').width;
export const height_ = Dimensions.get('screen').height;

export const isArrayCheck = arr => {
  return Array.isArray(arr) && arr.length > 0;
};
export const Log = (key = '', value) => {
  console.log(key + ' : ', value);
};

export const alertMessage = (showText, headerText = '') => {
  Alert.alert(headerText, showText);
};
export const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PASSWORD_REGEX = /(?=.*[a-z])(?=.*\d)/i;
const variables = {
  getSize,
  colorPrimary: '#D7F8E5',
  primaryGradient: ['#D7F8E5', '#FFFFFF', '#D7F8E5'],
  colorPrimaryDim: '#00112C50',
  colorButton: '#01AF44',

  colorSuccess: '#18B141',
  colorError: '#FF6060',
  colorBlack: '#000000',
  colorWhite: '#ffffff',

  fontColorMain: '',
  fontColorGray: '#D3D3D3',

  placeHolderColor: '#A9A9A9',

  fontWeightBold: '600',
  fontWeightThin: '200',
  fontWeightRegular: '400',
  colorHeading: '#2D2D53',
  colorSubtext: '#8B8B8B',

  fontSizeH1Large: getSize(50),
  fontSizeH1Medium: getSize(32),
  fontSizeH1Small: getSize(27),
  fontSizeH2Large: getSize(24),
  fontSizeH2Medium: getSize(21),
  fontSizeH2Small: getSize(18),
  fontSizePMedium: getSize(16),
  fontSizePSmall: getSize(14),
  fontSizeSubtext: getSize(12),
  fontSizeSmall: getSize(10),
  fontSizeTine: getSize(8),

  PoppinsRegular: 'poppinsregular',
  PoppinsBold: 'poppinsbold',
  PoppinsSemiBold: 'poppinssemibold',
  PoppinsMedium: 'poppinsmedium',

  UIPaddingHorizontal: '6%',
  UIPaddingVertical: '6%',
  tineScale: height_screen * 0.005,
  firstScale: height_screen * 0.01,
  secondScale: height_screen * 0.015,
  thirdScale: height_screen * 0.02,
  fourScale: height_screen * 0.025,
  fiveScale: height_screen * 0.03,
  sixScale: height_screen * 0.04,
  iosTopPadding: height_screen * 0.05,
  iosTopPadding_firstScale: height_screen * 0.03,

  borderRadiusSmall: getSize(5),
  borderRadiusMedium: getSize(10),
  borderRadiusLarge: getSize(30),
  borderRadiusXLarge: getSize(70),

  shadowStyle: intensity => ({
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: intensity / 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: intensity * 0.7,
    elevation: intensity,
  }),

  circleStyle: size => ({
    width: size,
    height: size,
    borderRadius: size,
    alignItems: 'center',
    justifyContent: 'center',
  }),

  circleSizeSmall: getSize(50),
  circleSizeMedium: getSize(60),
};

export default variables;
