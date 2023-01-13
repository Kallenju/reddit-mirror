import React from 'react';
import styles from './attachpdf.module.styl';
import Icons from '../../../Icons';
import noop from '../../../utils/noop';

interface AttachPdfProps {
  commonStyles: {
    [key: string]: string;
  };
  view: 'comment-form';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function AttachPdf({
  commonStyles,
  view,
  onClick,
}: AttachPdfProps): React.ReactElement {
  return (
    <div
      className={`${commonStyles['control']} ${
        commonStyles[`control_view_${view}`]
      } ${styles['attach-image']} ${styles[`attach-image_view_${view}`]}`}
    >
      <button
        className={commonStyles['control__button']}
        type="button"
        aria-label="Прикрепить пдф"
        onClick={onClick || noop}
      >
        <Icons.Component
          block={Icons.AttachPdfIcons.commentForm}
          svgClassName={`${commonStyles['control__svg']} ${styles['attach-image__svg']}`}
          svgPathClassName={`${commonStyles['control__svg-path']}`}
        />
      </button>
    </div>
  );
}
