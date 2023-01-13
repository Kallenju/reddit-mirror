import React, { useState } from 'react';
import styles from './menu.module.styl';
import GenericItem from '../../../../interfaces/GenericItem';
import ToggleButton from './ToggleButton';
import GenericList from '../../../GenericList';
import Dropdown from '../../../Dropdown';
import PostLongreadControls from '../../../PostLongreadControls';

interface MenuProps {
  id: string;
  isOpen?: boolean;
}

export function Menu({ id, isOpen }: MenuProps): React.ReactElement {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [items, setItems]: [
    Array<GenericItem>,
    React.Dispatch<React.SetStateAction<Array<GenericItem>>>
  ] = useState<Array<GenericItem>>([
    {
      id: 'post-menu__comments',
      value: <PostLongreadControls id={id} As="Comments" view="post-menu" />,
      className: styles['menu__controls-list-item'],
      As: 'li',
    },
    {
      id: 'post-menu__hide',
      value: <PostLongreadControls As="Hide" view="post-menu" />,
      className: styles['menu__controls-list-item'],
      As: 'li',
    },
    {
      id: 'post-menu__report',
      value: <PostLongreadControls As="Report" view="post-menu" />,
      className: styles['menu__controls-list-item'],
      As: 'li',
    },
    {
      id: 'post-menu__save',
      value: <PostLongreadControls As="Save" view="post-menu" />,
      className: styles['menu__controls-list-item'],
      As: 'li',
    },
    {
      id: 'post-menu__share',
      value: <PostLongreadControls As="Share" view="post-menu" />,
      className: styles['menu__controls-list-item'],
      As: 'li',
    },
  ]);

  return (
    <Dropdown
      styles={styles}
      styleBlockName="menu"
      isOpen={isOpen}
      onOpen={() => setIsDropdownOpen(true)}
      onClose={() => setIsDropdownOpen(false)}
      toggleButton={<ToggleButton activejs={isDropdownOpen} />}
    >
      <ul
        className={`${styles['menu__controls-list']} ${styles['menu__controls-list_screen_mobile']}`}
      >
        <GenericList
          items={items.filter((control: GenericItem): boolean => {
            return (
              control.id === 'post-menu__hide' ||
              control.id === 'post-menu__report'
            );
          })}
        />
      </ul>
      <ul
        className={`${styles['menu__controls-list']} ${styles['menu__controls-list_screen_desktop']}`}
      >
        <GenericList items={items} />
      </ul>
    </Dropdown>
  );
}
