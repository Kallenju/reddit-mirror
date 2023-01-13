import React from 'react';
import styles from './message.module.styl';
import Icons from '../../../../Icons';

export function Message(): React.ReactElement {
  return (
    <a className={styles['message']} href="#url-message">
      <span className={styles['message__counter']}>4</span>
      <Icons.Component
        block={Icons.MessageIcons.message}
        svgClassName={styles['message__icon']}
        svgPathClassName={styles['message__icon-path']}
      />
    </a>
  );
}
