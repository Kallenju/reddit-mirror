import React from 'react';
import styles from './share.module.styl';
import Icons from '../../../Icons';

interface ShareProps {
  commonStyles: {
    [key: string]: string;
  };
  view:
    | 'post-menu'
    | 'post-control-bar'
    | 'longread-control-bar'
    | 'shortread-control-bar'
    | 'comment-control-bar';
}

export function Share({ commonStyles, view }: ShareProps): React.ReactElement {
  let icon: Icons.ShareIcons = Icons.ShareIcons.postMenu;

  switch (view) {
    case 'post-control-bar': {
      icon = Icons.ShareIcons.postControlBar;
      break;
    }
    case 'longread-control-bar': {
      icon = Icons.ShareIcons.longreadControlBar;
      break;
    }
    case 'shortread-control-bar': {
      icon = Icons.ShareIcons.shortreadControlBar;
      break;
    }
    case 'comment-control-bar': {
      icon = Icons.ShareIcons.commentControlBar;
    }
  }

  return (
    <div
      className={`${commonStyles['control']} ${
        commonStyles[`control_view_${view}`]
      } ${styles['share']} ${styles[`share_view_${view}`]}`}
    >
      <button
        className={commonStyles['control__button']}
        type="button"
        aria-label="Поделиться постом"
      >
        <Icons.Component
          block={icon}
          svgClassName={`${commonStyles['control__svg']} ${styles['share__svg']}`}
          svgPathClassName={`${commonStyles['control__svg-path']}`}
        />
        {(view === 'post-menu' ||
          view === 'longread-control-bar' ||
          view === 'shortread-control-bar' ||
          view === 'comment-control-bar') && (
          <span className={commonStyles['control__label']}>Поделиться</span>
        )}
      </button>
    </div>
  );
}
