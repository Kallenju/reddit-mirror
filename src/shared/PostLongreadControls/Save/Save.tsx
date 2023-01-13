import React from 'react';
import styles from './save.module.styl';
import Icons from '../../../Icons';

interface SaveProps {
  commonStyles: {
    [key: string]: string;
  };
  view:
    | 'post-menu'
    | 'post-control-bar'
    | 'longread-control-bar'
    | 'shortread-control-bar';
}

export function Save({ commonStyles, view }: SaveProps): React.ReactElement {
  let icon: Icons.SaveIcons = Icons.SaveIcons.postMenu;

  switch (view) {
    case 'post-control-bar': {
      icon = Icons.SaveIcons.postControlBar;
      break;
    }
    case 'longread-control-bar': {
      icon = Icons.SaveIcons.longreadControlBar;
      break;
    }
    case 'shortread-control-bar': {
      icon = Icons.SaveIcons.shortreadControlBar;
    }
  }

  return (
    <div
      className={`${commonStyles['control']} ${
        commonStyles[`control_view_${view}`]
      } ${styles['save']} ${styles[`save_view_${view}`]}`}
    >
      <button
        className={commonStyles['control__button']}
        type="button"
        aria-label="Save post"
      >
        <Icons.Component
          block={icon}
          svgClassName={`${commonStyles['control__svg']} ${styles['save__svg']}`}
          svgPathClassName={`${commonStyles['control__svg-path']}`}
        />
        {(view === 'post-menu' ||
          view === 'longread-control-bar' ||
          view === 'shortread-control-bar') && (
          <span className={commonStyles['control__label']}>Save</span>
        )}
      </button>
    </div>
  );
}
