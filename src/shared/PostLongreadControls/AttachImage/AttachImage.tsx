import React from 'react';
import styles from './attachimage.module.styl';
import Icons from '../../../Icons';
import noop from '../../../utils/noop';

interface AttachImageProps {
  commonStyles: {
    [key: string]: string;
  };
  view: 'comment-form';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function AttachImage({
  commonStyles,
  view,
  onClick,
}: AttachImageProps): React.ReactElement {
  return (
    <div
      className={`${commonStyles['control']} ${
        commonStyles[`control_view_${view}`]
      } ${styles['attach-image']} ${styles[`attach-image_view_${view}`]}`}
    >
      <button
        className={commonStyles['control__button']}
        type="button"
        aria-label="Attach image"
        onClick={onClick || noop}
      >
        <Icons.Component
          block={Icons.AttachImageIcons.commentForm}
          svgClassName={`${commonStyles['control__svg']} ${styles['attach-image__svg']}`}
          svgPathClassName={`${commonStyles['control__svg-path']}`}
        />
      </button>
    </div>
  );
}
