import React from 'react';
import styles from './main.module.styl';

interface MainProps {
  text: string;
}

export function Main({ text }: MainProps): React.ReactElement {
  return (
    <div className={styles['main']}>
      <p className={styles['main__text']}>
        {text ||
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem ipsum dolor sit amet.'}
      </p>
    </div>
  );
}
