import React from 'react';
import styles from './copytext.module.styl';
import Icons from '../../../Icons';
import noop from '../../../utils/noop';

interface CopyTextProps {
  commonStyles: {
    [key: string]: string;
  };
  view: 'comment-form';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function CopyText({
  commonStyles,
  view,
  onClick,
}: CopyTextProps): React.ReactElement {
  return (
    <div
      className={`${commonStyles['control']} ${
        commonStyles[`control_view_${view}`]
      } ${styles['copy-text']} ${styles[`copy-text_view_${view}`]}`}
    >
      <button
        className={commonStyles['control__button']}
        type="button"
        aria-label="Copy text"
        onClick={onClick || noop}
      >
        <Icons.Component
          block={Icons.CopyTextIcons.commentForm}
          svgClassName={`${commonStyles['control__svg']} ${styles['copy-text__svg']}`}
          svgPathClassName={`${commonStyles['control__svg-path']}`}
        />
      </button>
    </div>
  );
}
