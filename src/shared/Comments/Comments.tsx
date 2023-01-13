import React from 'react';
import styles from './comments.module.styl';
import MirrorRedditComments from '../../interfaces/MirrorRedditComments';
import MirrorRedditCommentData from '../../interfaces/MirrorRedditCommentData';
import Comment from './Comment';
import GenericList from '../GenericList';

interface CommentsProps {
  comments: MirrorRedditComments['comments'];
}

interface Item {
  id: string;
  value: React.ReactNode;
  className: string;
  As: 'li';
}

function createNestedLists(
  items: Array<MirrorRedditCommentData>
): React.ReactElement {
  return items.length ? (
    <ul className={styles['comments__list']}>
      <GenericList
        items={items.map((comment: MirrorRedditCommentData): Item => {
          return {
            id: comment.id,
            value: (
              <>
                <Comment
                  id={comment.id}
                  userName={comment.name}
                  userIcon={comment.icon}
                  date={comment.created_utc}
                  text={comment.text}
                />
                {comment.replies && createNestedLists(comment.replies)}
              </>
            ),
            className: styles['comments__list-item'],
            As: 'li',
          };
        })}
      />
    </ul>
  ) : (
    <></>
  );
}

export function Comments({ comments }: CommentsProps): React.ReactElement {
  return (
    <div className={styles['comments']}>{createNestedLists(comments)}</div>
  );
}
