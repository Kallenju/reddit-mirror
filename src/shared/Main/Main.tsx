import React from 'react';
import styles from './main.module.styl';

interface MainProps {
  children: React.ReactNode;
}

export function Main({ children }: MainProps): React.ReactElement {
  return <main className={styles['main']}>{children}</main>;
}
