import React, {useRef, useState} from 'react';
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {eye_icon, eye_off_icon} from '../../constants/constants';
import variables, {width_screen} from '../../util/utils';
import BasicText from '../text/BasicText';

function CustomTextInput({
  value,
  onChangeText,
  placeholder,
  placeholderColor = variables.colorSubtext,
  style,
  leftIcon,
  keyboardType,
  returnType,
  password = false,
  validationError,
  ...props
}) {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <View style={[styles.main, variables.shadowStyle(2.5), {...style}]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextInput
            style={styles.input}
            value={value}
            keyboardType={keyboardType ? keyboardType : 'default'}
            onChangeText={onChangeText}
            placeholderTextColor={placeholderColor}
            placeholder={placeholder}
            secureTextEntry={password ? (visible ? false : true) : false}
            {...props}
          />
          {password ? (
            <Pressable
              onPress={() => {
                setVisible(!visible);
              }}>
              <Image
                source={visible ? eye_icon : eye_off_icon}
                style={styles.rightIcon}
              />
            </Pressable>
          ) : null}
        </View>
      </View>
      {validationError ? (
        <BasicText
          size={variables.fontSizeSmall}
          fontFamily={variables.PoppinsRegular}
          style={styles.validation}>
          {validationError}
        </BasicText>
      ) : null}
    </>
  );
}
export default CustomTextInput;

/**
 * @return  Styles component
 */
const styles = StyleSheet.create({
  main: {
    borderRadius: variables.getSize(13),
    paddingHorizontal: variables.secondScale,
    backgroundColor: variables.colorWhite,
    elevation: 1,

    height: variables.getSize(50),
    width: width_screen * 0.8,
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: '2.5%',
  },
  input: {
    flex: 1,
    color: variables.colorBlack,
    fontFamily: variables.PoppinsMedium,
    minHeight: Platform.OS == 'ios' ? 40 : 30,
    fontSize: variables.getSize(12),
  },
  rightIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: variables.placeHolderColor,
  },
  validation: {
    color: variables.colorError,
    textAlign: 'left',
    width: '80%',
  },
});
