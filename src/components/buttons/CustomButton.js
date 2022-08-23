import React from 'react';
import {ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native';
import variables from '../../util/utils';
import Heading from '../text/Heading';

function CustomButton({
  loading = false,
  onPress,
  children,
  shadow,
  style,
  disabled = false,

  ...props
}) {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        {
          ...(shadow ? variables.shadowStyle(2.5) : {}),
          ...style,
        },
      ]}
      {...props}
      onPress={onPress}
      disabled={disabled}>
      {loading ? (
        <ActivityIndicator size={'small'} color={variables.colorWhite} />
      ) : typeof children == 'string' ? (
        <Heading
          size={variables.fontSizePSmall}
          color={variables.colorWhite}
          style={styles.headingText}>
          {children}
        </Heading>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}

export default CustomButton;

/**
 * @return  Styles component
 */
const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: variables.colorButton,
    height: 50,
    width: '80%',
    borderRadius: variables.getSize(13),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headingText: {fontFamily: variables.PoppinsSemiBold, letterSpacing: 0.5},
});
