import React from 'react';
import styles from './update.module.styl';
import Icons from '../../../Icons';
import noop from '../../../utils/noop';

interface UpdateProps {
  commonStyles: {
    [key: string]: string;
  };
  view: 'comment-form';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Update({
  commonStyles,
  view,
  onClick,
}: UpdateProps): React.ReactElement {
  return (
    <div
      className={`${commonStyles['control']} ${
        commonStyles[`control_view_${view}`]
      } ${styles['update']} ${styles[`update_view_${view}`]}`}
    >
      <button
        className={commonStyles['control__button']}
        type="button"
        aria-label="Обновить"
        onClick={onClick || noop}
      >
        <Icons.Component
          block={Icons.UpdateIcons.commentForm}
          svgClassName={`${commonStyles['control__svg']} ${styles['update__svg']}`}
          svgPathClassName={`${commonStyles['control__svg-path']}`}
        />
      </button>
    </div>
  );
}
