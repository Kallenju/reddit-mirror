import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './longread.module.styl';
import MirrorRedditLongreadData from '../../interfaces/MirrorRedditLongreadData';
import useLongreadData from '../../hooks/useLongreadData';
import useModalRoot from '../../hooks/useModalRoot';
import useModalRootStyles from '../../hooks/useModalRootStyles';
import useOutsideClick from '../../hooks/useOutsideClick';
import useIsMounted from '../../hooks/useIsMounted';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PostLongreadControls from '../PostLongreadControls';

export function Longread(): React.ReactElement {
  const [isMounted]: [boolean] = useIsMounted();

  const refLongread: React.RefObject<HTMLElement> = useRef<HTMLElement>(null);

  const { id = '1' }: { id?: string } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  console.log('Longread.tsx: id = ', id);

  const [longreadRoot]: [HTMLDivElement | null] = useModalRoot();
  const [longreadMirrorData]: [MirrorRedditLongreadData | null] =
    useLongreadData(id);

  const handleModalRootStyles: (isLongreadOpen: boolean) => void =
    useModalRootStyles();

  useEffect((): void => {
    handleModalRootStyles(true);
  }, [handleModalRootStyles]);

  useOutsideClick({
    isMounted,
    refs: [refLongread],
    callback: (): void => {
      if (isMounted) {
        handleModalRootStyles(false);
        navigate(-1);
      }
    },
  });

  return longreadMirrorData && longreadRoot ? (
    createPortal(
      <article
        id={`longread-${id}`}
        className={styles['longread']}
        ref={refLongread}
      >
        <Header
          userName={longreadMirrorData.sr_detail.url}
          userIcon={longreadMirrorData.sr_detail.icon_img}
          date={longreadMirrorData.created_utc}
          title={longreadMirrorData.title}
          karma={longreadMirrorData.score}
          tag={'Законодательство'}
        />
        <Main
          paragraphs={longreadMirrorData.paragraphs}
          figures={longreadMirrorData.figures}
          figcaptions={longreadMirrorData.figcaptions}
        />
        <Footer id={id} numComments={longreadMirrorData.num_comments} />
        <PostLongreadControls
          As={'Close'}
          view={'longread-header'}
          onClick={() => {
            handleModalRootStyles(false);
            navigate(-1);
          }}
        />
      </article>,
      longreadRoot
    )
  ) : (
    <></>
  );
}
