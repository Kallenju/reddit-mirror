import React, { useState } from 'react';
import styles from './comment.module.styl';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ReplyFormContainer from '../../ReplyFormContainer';

interface CommentProps {
  id: string;
  userName: string;
  userIcon: string;
  date: number;
  text: string;
}

export function Comment({
  id,
  userName,
  userIcon,
  date,
  text,
}: CommentProps): React.ReactElement {
  const [isReplyFormShown, setIsReplyFormShown] = useState(false);

  return (
    <>
      <figure id={id} className={styles['comment']}>
        <Header userName={userName} userIcon={userIcon} date={date} />
        <Main text={text} />
        <Footer
          onClickComments={() => setIsReplyFormShown(!isReplyFormShown)}
        />
      </figure>
      {isReplyFormShown && (
        <ReplyFormContainer
          id={id}
          replyTo={userName}
          onValidSubmit={() => setIsReplyFormShown(false)}
        />
      )}
    </>
  );
}
