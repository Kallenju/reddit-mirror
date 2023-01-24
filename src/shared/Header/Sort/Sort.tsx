import React, { useState, useEffect, useCallback } from 'react';
import styles from './sort.module.styl';
import SortControl from '../../../interfaces/SortControl';
import GenericList from '../../GenericList';
import Dropdown from '../../Dropdown';
import Control from './Control';

interface SortProps {
  isOpen?: boolean;
}

interface SortItem {
  id: SortControl;
  dataTestId: SortControl;
  value: React.ReactNode;
  className: string;
  As: 'li';
}

const SORT_CONTROLS: Array<SortItem> = [
  {
    id: 'sort__best',
    dataTestId: 'sort__best',
    value: <Control As="sort__best" />,
    className: styles['sort__controls-list-item'],
    As: 'li',
  },
  {
    id: 'sort__hot',
    dataTestId: 'sort__hot',
    value: <Control As="sort__hot" />,
    className: styles['sort__controls-list-item'],
    As: 'li',
  },
  {
    id: 'sort__new',
    dataTestId: 'sort__new',
    value: <Control As="sort__new" />,
    className: styles['sort__controls-list-item'],
    As: 'li',
  },
  {
    id: 'sort__top',
    dataTestId: 'sort__top',
    value: <Control As="sort__top" />,
    className: styles['sort__controls-list-item'],
    As: 'li',
  },
  {
    id: 'sort__rising',
    dataTestId: 'sort__rising',
    value: <Control As="sort__rising" />,
    className: styles['sort__controls-list-item'],
    As: 'li',
  },
];

export function Sort({ isOpen }: SortProps): React.ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [desctopItems, setDesctopItems]: [
    Array<SortItem>,
    React.Dispatch<React.SetStateAction<Array<SortItem>>>
  ] = useState<Array<SortItem>>(SORT_CONTROLS);
  const [mobileItems, setMobileItems]: [
    Array<SortItem>,
    React.Dispatch<React.SetStateAction<Array<SortItem>>>
  ] = useState<Array<SortItem>>([
    {
      id: 'sort__best',
      dataTestId: 'sort__best',
      value: <Control As="sort__best" view="toggle-button" activejs={true} />,
      className: styles['sort__controls-list-item'],
      As: 'li',
    },
    {
      id: 'sort__hot',
      dataTestId: 'sort__hot',
      value: <Control As="sort__hot" />,
      className: styles['sort__controls-list-item'],
      As: 'li',
    },
    {
      id: 'sort__new',
      dataTestId: 'sort__new',
      value: <Control As="sort__new" />,
      className: styles['sort__controls-list-item'],
      As: 'li',
    },
    {
      id: 'sort__top',
      dataTestId: 'sort__top',
      value: <Control As="sort__top" />,
      className: styles['sort__controls-list-item'],
      As: 'li',
    },
    {
      id: 'sort__rising',
      dataTestId: 'sort__rising',
      value: <Control As="sort__rising" />,
      className: styles['sort__controls-list-item'],
      As: 'li',
    },
  ]);
  const [activeItemId, setActiveItemId]: [
    SortControl,
    React.Dispatch<React.SetStateAction<SortControl>>
  ] = useState<SortControl>('sort__best');

  function handleOnClick(event: React.MouseEvent | MouseEvent): void {
    if (
      event &&
      (event.target instanceof HTMLElement ||
        event.target instanceof SVGElement)
    ) {
      const li: HTMLElement | null = event.target.closest('li');
      if (li) {
        const dataTestId: string | undefined = li.dataset.testId;
        if (
          dataTestId &&
          dataTestId !== activeItemId &&
          (dataTestId === 'sort__best' ||
            dataTestId === 'sort__hot' ||
            dataTestId === 'sort__new' ||
            dataTestId === 'sort__top' ||
            dataTestId === 'sort__rising')
        ) {
          setActiveItemId(dataTestId);
        }
      }
    }
  }

  useEffect(() => {
    const activeElementToBeDeletted: SortItem | undefined = SORT_CONTROLS.find(
      (item: SortItem): boolean => {
        return item.id === activeItemId;
      }
    );

    if (activeElementToBeDeletted) {
      const activeItemIndex: number = SORT_CONTROLS.indexOf(
        activeElementToBeDeletted
      );

      if (activeItemIndex !== -1) {
        const newMobileItems: Array<SortItem> = [...SORT_CONTROLS];

        newMobileItems.splice(activeItemIndex, 1);

        const activeElementToBeSetted: SortItem = {
          ...activeElementToBeDeletted,
        };

        activeElementToBeSetted.value = (
          <Control As={activeItemId} view={'toggle-button'} activejs={true} />
        );

        newMobileItems.unshift(activeElementToBeSetted);

        setMobileItems(newMobileItems);
      }
    }
  }, [activeItemId]);

  return (
    <Dropdown
      styles={styles}
      styleBlockName="sort"
      isOpen={isOpen}
      onClick={handleOnClick}
      toggleButton={<Control As={activeItemId} view={'toggle-button'} />}
    >
      <ul
        className={`${styles['sort__controls-list']} ${styles['sort__controls-list_screen_desktop']}`}
      >
        <GenericList items={desctopItems} />
      </ul>
      <ul
        className={`${styles['sort__controls-list']} ${styles['sort__controls-list_screen_mobile']}`}
      >
        <GenericList items={mobileItems} />
      </ul>
    </Dropdown>
  );
}
