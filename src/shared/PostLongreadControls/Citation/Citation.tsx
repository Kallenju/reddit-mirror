import React from 'react';
import styles from './citation.module.styl';
import Icons from '../../../Icons';
import noop from '../../../utils/noop';

interface CitationProps {
  commonStyles: {
    [key: string]: string;
  };
  view: 'comment-form';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Citation({
  commonStyles,
  view,
  onClick,
}: CitationProps): React.ReactElement {
  return (
    <div
      className={`${commonStyles['control']} ${
        commonStyles[`control_view_${view}`]
      } ${styles['citation']} ${styles[`citation_view_${view}`]}`}
    >
      <button
        className={commonStyles['control__button']}
        type="button"
        aria-label="Citation"
        onClick={onClick || noop}
      >
        <Icons.Component
          block={Icons.CitationIcons.commentForm}
          svgClassName={`${commonStyles['control__svg']} ${styles['citation__svg']}`}
          svgPathClassName={`${commonStyles['control__svg-path']}`}
        />
      </button>
    </div>
  );
}
