import React, { useState, useEffect } from 'react';
import styles from './postslist.module.styl';
import { RootState } from '../../store';
import ReduxMirrorRedditPostsData from '../../interfaces/ReduxMirrorRedditPostsData';
import ReduxFetchPostsThunkArg from '../../interfaces/ReduxFetchPostsThunkArg';
import MirrorRedditPostData from '../../interfaces/MirrorRedditPostData';
import { useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import usePostsData from '../../hooks/usePostsData';
import selectPosts from '../../store/selectors/selectPosts';
import GenericList from '../GenericList';
import Post from './Post';

type PostsListProps = Partial<ReduxFetchPostsThunkArg>;

interface Item {
  id: string;
  value: React.ReactNode;
  className: string;
  As: 'li';
}

export function PostsList({
  subreddit = 'strength_training',
  api = 'best',
  postsLimit = 10,
}: PostsListProps): React.ReactElement {
  const fetchPosts: ({
    abortController,
  }: {
    abortController: AbortController;
  }) => void = usePostsData({
    subreddit,
    api,
    postsLimit,
  });
  const [fetchPostsTrigger, setFetchPostsTrigger]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState<boolean>(false);

  const postsData: ReduxMirrorRedditPostsData = useSelector<
    RootState,
    RootState['posts']
  >(selectPosts);

  const [items, setItems]: [
    Array<Item>,
    React.Dispatch<React.SetStateAction<Array<Item>>>
  ] = useState<Array<Item>>([]);

  const { ref: downloadFlagRef } = useInView({
    rootMargin: '0px',
    onChange: (inView) => {
      if (inView && items.length % (3 * postsLimit) !== 0) {
        setFetchPostsTrigger(true);
      }
    },
  });

  useEffect((): void => {
    if (postsData[api] && postsData.state === 'idle') {
      setItems(
        postsData[api]?.map((postData: MirrorRedditPostData): Item => {
          return {
            id: postData.id,
            value: (
              <Post
                id={postData.id}
                userName={postData.sr_detail.url}
                userIcon={postData.sr_detail.icon_img}
                title={postData.title}
                date={postData.created_utc}
                preview={postData.preview}
                karma={postData.score}
                comments={postData.num_comments}
              />
            ),
            className: styles['posts-list__item'],
            As: 'li',
          };
        }) || []
      );
      setFetchPostsTrigger(false);
    }
  }, [api, postsData]);

  useEffect((): (() => void) | void => {
    if (fetchPostsTrigger) {
      const abortController: AbortController = new AbortController();
      fetchPosts({ abortController });
      return (): void => {
        abortController.abort();
      };
    }
  }, [fetchPostsTrigger, fetchPosts]);

  if (!postsData[api] && postsData.state === 'idle') {
    return (
      <section className={styles['posts-list']}>
        <span className={`${styles['posts-list__message-to-user']}`}>
          Чтобы загрузить список постов, пожалуйста, авторизуйтесь.
        </span>
      </section>
    );
  }

  if (!postsData[api] && postsData.state === 'pending') {
    return (
      <section className={styles['posts-list']}>
        <span className={`${styles['posts-list__message-to-user']}`}>
          Добро пожаловать. Идет загрузка списка постов.
        </span>
      </section>
    );
  }

  if (!postsData[api]?.length && postsData.state === 'idle') {
    return (
      <section className={styles['posts-list']}>
        <span className={`${styles['posts-list__message-to-user']}`}>
          Постов не найдено. Выберите другой раздел.
        </span>
      </section>
    );
  }

  if (postsData.error) {
    return (
      <section className={styles['posts-list']}>
        <h2 className={`${styles['posts-list__title']}`}>
          Возникла ошибка при загрузке постов. Пожалуйста, попробуйте позже.
        </h2>
      </section>
    );
  }

  return (
    <section className={styles['posts-list']}>
      <h2
        className={`${styles['posts-list__title']} ${styles['posts-list__title_hidden']}`}
      >
        Список постов
      </h2>
      <ul className={styles['posts-list__list']}>
        <GenericList items={items} />
      </ul>
      <span
        className={styles['posts-list__download-flag']}
        ref={downloadFlagRef}
      ></span>
      {items.length % (3 * postsLimit) === 0 &&
        postsData.state !== 'pending' &&
        !postsData.end && (
          <button
            className={`${styles['posts-list__load-button']}`}
            onClick={() => setFetchPostsTrigger(true)}
          >
            Загрузить еще
          </button>
        )}
      {postsData.state === 'pending' && !postsData.end && (
        <span className={`${styles['posts-list__message-to-user']}`}>
          Идет подгрузка постов, пожалуйста, ожидайте.
        </span>
      )}
    </section>
  );
}
