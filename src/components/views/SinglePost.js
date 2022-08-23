import React from 'react';
import {StyleSheet, View} from 'react-native';
import variables from '../../util/utils';
import BasicText from '../text/BasicText';
import Heading from '../text/Heading';

function SinglePost({post}) {
  return (
    <View style={styles.main}>
      <Heading
        size={variables.fontSizeSmall}
        fontFamily={variables.PoppinsMedium}>
        {`${post.id}. ${post.title}`}
      </Heading>
      <BasicText
        size={variables.fontSizeSmall}
        fontFamily={variables.PoppinsRegular}>
        {post.body}
      </BasicText>
    </View>
  );
}

export default SinglePost;

/**
 * @return Styles Component
 */
const styles = StyleSheet.create({
  main: {
    width: '90%',
    padding: '5%',
    elevation: 2.5,
    alignSelf: 'center',
    backgroundColor: variables.colorWhite,
    marginVertical: '2.5%',
    borderRadius: 15,
  },
});
