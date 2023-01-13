import React from 'react';
import styles from './report.module.styl';
import Icons from '../../../Icons';

interface ReportProps {
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

export function Report({
  commonStyles,
  view,
}: ReportProps): React.ReactElement {
  let icon: Icons.ReportIcons = Icons.ReportIcons.postMenu;

  switch (view) {
    case 'post-control-bar': {
      icon = Icons.ReportIcons.postControlBar;
      break;
    }
    case 'longread-control-bar': {
      icon = Icons.ReportIcons.longreadControlBar;
      break;
    }
    case 'shortread-control-bar': {
      icon = Icons.ReportIcons.shortreadControlBar;
      break;
    }
    case 'comment-control-bar': {
      icon = Icons.ReportIcons.commentControlBar;
    }
  }

  return (
    <div
      className={`${commonStyles['control']} ${
        commonStyles[`control_view_${view}`]
      } ${styles['report']} ${styles[`report_view_${view}`]}`}
    >
      <button
        className={commonStyles['control__button']}
        type="button"
        aria-label="Пожаловаться на пост"
      >
        <Icons.Component
          block={icon}
          svgClassName={`${commonStyles['control__svg']} ${styles['report__svg']}`}
          svgPathClassName={`${commonStyles['control__svg-path']}`}
        />
        {(view === 'post-menu' ||
          view === 'longread-control-bar' ||
          view === 'shortread-control-bar' ||
          view === 'comment-control-bar') && (
          <span className={commonStyles['control__label']}>Пожаловаться</span>
        )}
      </button>
    </div>
  );
}
