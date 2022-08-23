import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import variables from '../../util/utils';

function SocialButton({icon, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={icon} style={styles.image} />
    </TouchableOpacity>
  );
}

export default SocialButton;

/**
 * @return  Styles component
 */

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: variables.colorWhite,
    borderWidth: 2.5,
    width: 50,
    height: 50,
    elevation: 1,
  },
  image: {width: 20, height: 20, resizeMode: 'contain'},
});
