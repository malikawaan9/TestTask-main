import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import variables from '../../util/utils';
import Heading from '../text/Heading';
const Appbar = ({
  leftIcon,
  title,
  rightIcon,
  onLeftIconPress,
  rightIconPress,
  ...props
}) => {
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar backgroundColor={variables.colorPrimary} />
      <Pressable onPress={onLeftIconPress}>
        {leftIcon ? (
          <Icon name="arrow-back" size={25} color={variables.colorWhite} />
        ) : null}
      </Pressable>
      <Heading
        size={variables.fontSizePMedium}
        fontFamily={variables.fontRubikRegular}
        style={styles.title}>
        {title}
      </Heading>
      {rightIcon ? (
        <Pressable onPress={rightIconPress}>
          <Icon name={rightIcon} size={25} color={variables.colorBlack} />
        </Pressable>
      ) : null}
    </SafeAreaView>
  );
};
export default Appbar;

/**
 * @return Styles Component
 */
const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    width: '100%',
    flex: 0.1,
    paddingHorizontal: '5%',
    backgroundColor: variables.colorPrimary,
    alignItems: 'center',
    elevation: 5,
  },
  icon: {},
  title: {
    flex: 1,
    paddingLeft: '5%',
    textAlign: 'left',
  },
});
