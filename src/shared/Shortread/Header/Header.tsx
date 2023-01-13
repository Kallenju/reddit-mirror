import React from 'react';
import styles from './header.module.styl';
import Account from '../../Account';
import CreatedAt from '../../CreatedAt';
import Tag from '../../Tag';
import PostLongreadControls from '../../PostLongreadControls';

interface HeaderProps {
  userName: string;
  userIcon: string;
  date: number;
  tag: string;
  title: string;
  karma?: number;
}

export function Header({
  userName,
  userIcon,
  date,
  tag,
  title,
  karma,
}: HeaderProps): React.ReactElement {
  return (
    <header className={styles['header']}>
      <PostLongreadControls
        As={'Karma'}
        view={'shortread-header'}
        count={karma}
      />
      <div className={styles['header__wrapper']}>
        <h2 className={styles['header__title']}>{title}</h2>
        <div className={styles['header__metadata']}>
          <CreatedAt date={date} view={'shortread-header'} />
          <Account
            userName={userName}
            userIcon={userIcon}
            view={'shortread-header'}
          />
          <Tag text={tag} view={'shortread-header'} />
        </div>
      </div>
    </header>
  );
}
