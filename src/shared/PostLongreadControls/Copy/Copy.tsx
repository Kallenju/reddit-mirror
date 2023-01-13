import React from 'react';
import styles from './copy.module.styl';
import Icons from '../../../Icons';
import noop from '../../../utils/noop';

interface CopyProps {
  commonStyles: {
    [key: string]: string;
  };
  view: 'comment-form';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Copy({
  commonStyles,
  view,
  onClick,
}: CopyProps): React.ReactElement {
  return (
    <div
      className={`${commonStyles['control']} ${
        commonStyles[`control_view_${view}`]
      } ${styles['copy']} ${styles[`copy_view_${view}`]}`}
    >
      <button
        className={commonStyles['control__button']}
        type="button"
        aria-label="Copy"
        onClick={onClick || noop}
      >
        <Icons.Component
          block={Icons.CopyIcons.commentForm}
          svgClassName={`${commonStyles['control__svg']} ${styles['copy__svg']}`}
          svgPathClassName={`${commonStyles['control__svg-path']}`}
        />
      </button>
    </div>
  );
}
