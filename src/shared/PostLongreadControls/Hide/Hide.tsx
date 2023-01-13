import React from 'react';
import styles from './hide.module.styl';
import Icons from '../../../Icons';

interface HideProps {
  commonStyles: {
    [key: string]: string;
  };
  view:
    | 'post-menu'
    | 'post-control-bar'
    | 'longread-control-bar'
    | 'shortread-control-bar';
}

export function Hide({ commonStyles, view }: HideProps): React.ReactElement {
  let icon: Icons.HideIcons = Icons.HideIcons.postMenu;

  switch (view) {
    case 'post-control-bar': {
      icon = Icons.HideIcons.postControlBar;
      break;
    }
    case 'longread-control-bar': {
      icon = Icons.HideIcons.longreadControlBar;
      break;
    }
    case 'shortread-control-bar': {
      icon = Icons.HideIcons.shortreadControlBar;
    }
  }

  return (
    <div
      className={`${commonStyles['control']} ${
        commonStyles[`control_view_${view}`]
      } ${styles['hide']} ${styles[`hide_view_${view}`]}`}
    >
      <button
        className={commonStyles['control__button']}
        type="button"
        aria-label="Hide post"
      >
        <Icons.Component
          block={icon}
          svgClassName={`${commonStyles['control__svg']} ${styles['hide__svg']}`}
          svgPathClassName={`${commonStyles['control__svg-path']}`}
        />
        {(view === 'post-menu' ||
          view === 'longread-control-bar' ||
          view === 'shortread-control-bar') && (
          <span className={commonStyles['control__label']}>Hide</span>
        )}
      </button>
    </div>
  );
}
