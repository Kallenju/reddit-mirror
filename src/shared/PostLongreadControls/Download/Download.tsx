import React from 'react';
import styles from './download.module.styl';
import Icons from '../../../Icons';
import noop from '../../../utils/noop';

interface DownloadProps {
  commonStyles: {
    [key: string]: string;
  };
  view: 'comment-form';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Download({
  commonStyles,
  view,
  onClick,
}: DownloadProps): React.ReactElement {
  return (
    <div
      className={`${commonStyles['control']} ${
        commonStyles[`control_view_${view}`]
      } ${styles['download']} ${styles[`download_view_${view}`]}`}
    >
      <button
        className={commonStyles['control__button']}
        type="button"
        aria-label="Скачать"
        onClick={onClick || noop}
      >
        <Icons.Component
          block={Icons.DownloadIcons.commentForm}
          svgClassName={`${commonStyles['control__svg']} ${styles['download__svg']}`}
          svgPathClassName={`${commonStyles['control__svg-path']}`}
        />
      </button>
    </div>
  );
}
