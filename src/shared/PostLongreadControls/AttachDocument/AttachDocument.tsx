import React from 'react';
import styles from './attachdocument.module.styl';
import Icons from '../../../Icons';
import noop from '../../../utils/noop';

interface AttachDocumentProps {
  commonStyles: {
    [key: string]: string;
  };
  view: 'comment-form';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function AttachDocument({
  commonStyles,
  view,
  onClick,
}: AttachDocumentProps): React.ReactElement {
  return (
    <div
      className={`${commonStyles['control']} ${
        commonStyles[`control_view_${view}`]
      } ${styles['attach-document']} ${styles[`attach-document_view_${view}`]}`}
    >
      <button
        className={commonStyles['control__button']}
        type="button"
        aria-label="Attach document"
        onClick={onClick || noop}
      >
        <Icons.Component
          block={Icons.AttachDocumentIcons.commentForm}
          svgClassName={`${commonStyles['control__svg']} ${styles['attach-document__svg']}`}
          svgPathClassName={`${commonStyles['control__svg-path']}`}
        />
      </button>
    </div>
  );
}
