import React from 'react';
import styles from './formattext.module.styl';
import Icons from '../../../Icons';
import noop from '../../../utils/noop';

interface FormatTextProps {
  commonStyles: {
    [key: string]: string;
  };
  view: 'comment-form';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function FormatText({
  commonStyles,
  view,
  onClick,
}: FormatTextProps): React.ReactElement {
  return (
    <div
      className={`${commonStyles['control']} ${
        commonStyles[`control_view_${view}`]
      } ${styles['format-text']} ${styles[`format-text_view_${view}`]}`}
    >
      <button
        className={commonStyles['control__button']}
        type="button"
        aria-label="Форматировать текст"
        onClick={onClick || noop}
      >
        <Icons.Component
          block={Icons.FormatTextIcons.commentForm}
          svgClassName={`${commonStyles['control__svg']} ${styles['format-text__svg']}`}
          svgPathClassName={`${commonStyles['control__svg-path']}`}
        />
      </button>
    </div>
  );
}
