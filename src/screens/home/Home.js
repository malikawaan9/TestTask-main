import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, ToastAndroid, View} from 'react-native';
import {clearAsync} from '../../components/AsyncStorage';
import Appbar from '../../components/views/Appbar';
import SinglePost from '../../components/views/SinglePost';
import {postsUrl} from '../../constants/constants';
import request from '../../util/request';
import variables, {isArrayCheck} from '../../util/utils';
import styles from './style';

function Home({navigation}) {
  const [posts, setPosts] = useState(null);

  const [end, setEnd] = useState(25);

  useEffect(() => {
    getPosts();
  }, []);

  /**
   *
   * @returns get Posts From Api
   */
  const getPosts = async () => {
    const res = await request.get(postsUrl);
    if (isArrayCheck(res.data)) {
      setPosts(res.data);
    }
  };

  /**
   *
   * @return LOGout Handler
   * */
  const _handleLogout = async () => {
    ToastAndroid.show('Logging out ', ToastAndroid.SHORT);
    const response = await clearAsync('@user');
    response ? navigation.replace('Login') : null;
  };

  /**
   *
   * @returns Handling Pagination locally as Api is not available for pagination
   */
  const loadMorePosts = () => {
    end < posts.length ? setEnd(end + 25) : null;
  };
  return (
    <View style={styles.main}>
      <Appbar
        title={'Home'}
        rightIcon={'logout'}
        rightIconPress={() => {
          _handleLogout();
        }}
      />
      <View style={{flex: 0.9}}>
        {isArrayCheck(posts) ? (
          <FlatList
            data={posts.slice(0, end)}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
              return <SinglePost post={item} />;
            }}
            onEndReached={() => loadMorePosts()}
            onEndReachedThreshold={1}
            ListFooterComponent={() => {
              return end < posts.length ? (
                <ActivityIndicator
                  size={'small'}
                  color={variables.colorButton}
                  style={{margin: '5%'}}
                />
              ) : null;
            }}
          />
        ) : (
          <ActivityIndicator
            size={'small'}
            color={variables.colorButton}
            style={{margin: '5%'}}
          />
        )}
      </View>
    </View>
  );
}

export default Home;
