import React from 'react';
import styles from './header.module.styl';
import Account from '../../../Account';
import CreatedAt from '../../../CreatedAt';

interface HeaderProps {
  userName: string;
  userIcon: string;
  date: number;
}

export function Header({
  userName,
  userIcon,
  date,
}: HeaderProps): React.ReactElement {
  return (
    <header className={styles['header']}>
      <Account
        userName={userName}
        userIcon={userIcon}
        view={'comment-header'}
      />
      <CreatedAt date={date} view={'comment-header'} />
    </header>
  );
}
