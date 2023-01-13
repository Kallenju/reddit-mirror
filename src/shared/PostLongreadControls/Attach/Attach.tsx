import React from 'react';
import styles from './attach.module.styl';
import Icons from '../../../Icons';
import noop from '../../../utils/noop';

interface AttachProps {
  commonStyles: {
    [key: string]: string;
  };
  view: 'comment-form';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Attach({
  commonStyles,
  view,
  onClick,
}: AttachProps): React.ReactElement {
  return (
    <div
      className={`${commonStyles['control']} ${
        commonStyles[`control_view_${view}`]
      } ${styles['attach']} ${styles[`attach_view_${view}`]}`}
    >
      <button
        className={commonStyles['control__button']}
        type="button"
        aria-label="Прикрепить"
        onClick={onClick || noop}
      >
        <Icons.Component
          block={Icons.AttachIcons.commentForm}
          svgClassName={`${commonStyles['control__svg']} ${styles['attach__svg']}`}
          svgPathClassName={`${commonStyles['control__svg-path']}`}
        />
      </button>
    </div>
  );
}
