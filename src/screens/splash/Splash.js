import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {getAsyncObject} from '../../components/AsyncStorage';
import variables from '../../util/utils';

function Splash({navigation}) {
  useEffect(() => {
    getData();
  });
  /**
   * { Get User from Async}
   */
  const getData = async () => {
    let res = await getAsyncObject('@user');
    navigation.replace(res ? 'Home' : 'Login');
  };
  return (
    <View style={styles.main}>
      <ActivityIndicator size={'large'} color={variables.colorButton} />
    </View>
  );
}

export default Splash;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: variables.colorPrimary,
  },
});
