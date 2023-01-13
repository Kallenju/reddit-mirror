import React from 'react';
import styles from './recordvoice.module.styl';
import Icons from '../../../Icons';
import noop from '../../../utils/noop';

interface RecordVoiceProps {
  commonStyles: {
    [key: string]: string;
  };
  view: 'comment-form';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function RecordVoice({
  commonStyles,
  view,
  onClick,
}: RecordVoiceProps): React.ReactElement {
  return (
    <div
      className={`${commonStyles['control']} ${
        commonStyles[`control_view_${view}`]
      } ${styles['record-voice']} ${styles[`record-voice_view_${view}`]}`}
    >
      <button
        className={commonStyles['control__button']}
        type="button"
        aria-label="Record Voice"
        onClick={onClick || noop}
      >
        <Icons.Component
          block={Icons.RecordVoiceIcons.commentForm}
          svgClassName={`${commonStyles['control__svg']} ${styles['record-voice__svg']}`}
          svgPathClassName={`${commonStyles['control__svg-path']}`}
        />
      </button>
    </div>
  );
}
