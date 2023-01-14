import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './shortread.module.styl';
import useComments from '../../hooks/useComments';
import MirrorRedditComments from '../../interfaces/MirrorRedditComments';
import useModalRoot from '../../hooks/useModalRoot';
import useModalRootStyles from '../../hooks/useModalRootStyles';
import useOutsideClick from '../../hooks/useOutsideClick';
import useIsMounted from '../../hooks/useIsMounted';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PostLongreadControls from '../PostLongreadControls';

export function Shortread(): React.ReactElement {
  const [isMounted]: [boolean] = useIsMounted();

  const { id = '1' }: { id?: string } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  const refShortread: React.RefObject<HTMLElement> = useRef<HTMLElement>(null);

  const [modalRoot]: [HTMLDivElement | null] = useModalRoot();

  const [comments]: [MirrorRedditComments] = useComments(id);

  const handleModalRootStyles: (isLongreadOpen: boolean) => void =
    useModalRootStyles();

  useEffect((): void => {
    handleModalRootStyles(true);
  }, [handleModalRootStyles]);

  useOutsideClick({
    isMounted,
    refs: [refShortread],
    callback: (): void => {
      if (isMounted) {
        handleModalRootStyles(false);
        navigate(-1);
      }
    },
  });

  return comments && modalRoot ? (
    createPortal(
      <article
        id={`shortread-${id}`}
        className={styles['shortread']}
        ref={refShortread}
      >
        <Header
          userName={comments.post.sr_detail.url}
          userIcon={comments.post.sr_detail.icon_img}
          date={comments.post.created_utc}
          title={comments.post.title}
          karma={comments.post.score}
          tag={'Workout'}
        />
        <Main title={comments.post.title} preview={comments.post.preview} />
        <Footer
          id={id}
          numComments={comments.post.num_comments}
          comments={comments.comments}
        />
        <PostLongreadControls
          As={'Close'}
          view={'shortread-header'}
          onClick={() => {
            handleModalRootStyles(false);
            navigate(-1);
          }}
        />
      </article>,
      modalRoot
    )
  ) : (
    <></>
  );
}
