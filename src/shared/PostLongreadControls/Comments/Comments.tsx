import React from 'react';
import styles from './comments.module.styl';
import { Link } from 'react-router-dom';
import Icons from '../../../Icons';

interface CommentsProps {
  id?: string;
  commonStyles: {
    [key: string]: string;
  };
  view:
    | 'post-menu'
    | 'post-control-bar'
    | 'longread-control-bar'
    | 'comment-control-bar'
    | 'shortread-control-bar';
  numComments?: number;
  onClick?: (event: React.MouseEvent | MouseEvent) => void;
}

export function Comments({
  id,
  commonStyles,
  view,
  numComments,
  onClick,
}: CommentsProps): React.ReactElement {
  let icon: Icons.CommentsIcons = Icons.CommentsIcons.postMenu;

  switch (view) {
    case 'post-control-bar': {
      icon = Icons.CommentsIcons.postControlBar;
      break;
    }
    case 'longread-control-bar': {
      icon = Icons.CommentsIcons.longreadControlBar;
      break;
    }
    case 'shortread-control-bar': {
      icon = Icons.CommentsIcons.shortreadControlBar;
      break;
    }
    case 'comment-control-bar': {
      icon = Icons.CommentsIcons.commentControlBar;
    }
  }

  const commentsChildren = (
    <>
      <Icons.Component
        block={icon}
        svgClassName={`${commonStyles['control__svg']} ${styles['comments__svg']}`}
        svgPathClassName={`${commonStyles['control__svg-path']}`}
      />
      {(view === 'post-menu' || view === 'comment-control-bar') && (
        <span className={commonStyles['control__label']}>
          {view === 'comment-control-bar' ? 'Ответить' : 'Комментарии'}
        </span>
      )}
      {(view === 'post-control-bar' ||
        view === 'longread-control-bar' ||
        view === 'shortread-control-bar') && (
        <span
          className={`${commonStyles['control__counter']} ${styles['comments__counter']}`}
        >
          {numComments || 0}
        </span>
      )}
    </>
  );

  return (
    <div
      className={`${commonStyles['control']} ${
        commonStyles[`control_view_${view}`]
      } ${styles['comments']} ${styles[`comments_view_${view}`]}`}
    >
      {onClick ? (
        <button
          className={commonStyles['control__button']}
          onClick={onClick}
          aria-label="Открыть комментарии"
        >
          {commentsChildren}
        </button>
      ) : (
        <Link
          className={commonStyles['control__button']}
          to={typeof id === 'string' ? `${id}/comments` : ''}
          aria-label="Открыть комментарии"
        >
          {commentsChildren}
        </Link>
      )}
    </div>
  );
}
