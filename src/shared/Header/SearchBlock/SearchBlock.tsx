import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import selectUser from '../../../store/selectors/selectUser';
import styles from './searchblock.module.styl';
import ReduxMirrorRedditUser from '../../../interfaces/ReduxMirrorRedditUser';
import Message from './Message';
import PostsSearch from './PostsSearch';
import Account from '../../Account';

export function SearchBlock(): React.ReactElement {
  const user: ReduxMirrorRedditUser = useSelector<RootState, RootState['user']>(
    selectUser
  );

  if (user.state === 'pending') {
    <div className={styles['search-block']}>
      <Message />
      <PostsSearch />
      <Account
        userName={'Loading...'}
        userIcon={user.data.icon_img}
        view={'personal-header'}
      />
    </div>;
  }

  if (user.state === 'failed') {
    <div className={styles['search-block']}>
      <Message />
      <PostsSearch />
      <Account
        userName={'Error...'}
        userIcon={user.data.icon_img}
        view={'personal-header'}
      />
    </div>;
  }

  return (
    <div className={styles['search-block']}>
      <Message />
      <PostsSearch />
      <Account
        userName={user.data.name}
        userIcon={user.data.icon_img}
        view={'personal-header'}
      />
    </div>
  );
}
