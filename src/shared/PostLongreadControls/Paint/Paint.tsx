import React from 'react';
import styles from './paint.module.styl';
import Icons from '../../../Icons';
import noop from '../../../utils/noop';

interface PaintProps {
  commonStyles: {
    [key: string]: string;
  };
  view: 'comment-form';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Paint({
  commonStyles,
  view,
  onClick,
}: PaintProps): React.ReactElement {
  return (
    <div
      className={`${commonStyles['control']} ${
        commonStyles[`control_view_${view}`]
      } ${styles['paint']} ${styles[`paint_view_${view}`]}`}
    >
      <button
        className={commonStyles['control__button']}
        type="button"
        aria-label="Рисовать"
        onClick={onClick || noop}
      >
        <Icons.Component
          block={Icons.PaintIcons.commentForm}
          svgClassName={`${commonStyles['control__svg']} ${styles['paint__svg']}`}
          svgPathClassName={`${commonStyles['control__svg-path']}`}
        />
      </button>
    </div>
  );
}
