import React from 'react';
import styles from './control.module.styl';
import SortControl from '../../../../interfaces/SortControl';
import Best from './Best';
import New from './New';
import Top from './Top';
import Hot from './Hot';
import Long from './Long';

interface ControlProps {
  As: SortControl;
  view?: 'toggle-button' | 'control';
  activejs?: boolean;
}

export function Control({
  As,
  view,
  activejs,
}: ControlProps): React.ReactElement {
  let buttonClassName = styles['control'];

  if (view === 'toggle-button') {
    buttonClassName += ` ${styles['control_view_toggle-button']}`;
  }

  if (activejs) {
    buttonClassName += ` ${styles['control_activejs']}`;
  }

  const stylesForControl = {
    button: buttonClassName,
    control__svg: styles['control__svg'],
    'control__svg-path': styles['control__svg-path'],
    control__label: styles['control__label'],
    'control__svg-arrow': styles['control__svg-arrow'],
    'control__svg-arrow-path': styles['control__svg-arrow-path'],
  };

  switch (As) {
    case 'sort__best':
      return <Best styles={stylesForControl} view={view} />;
    case 'sort__new':
      return <New styles={stylesForControl} view={view} />;
    case 'sort__top':
      return <Top styles={stylesForControl} view={view} />;
    case 'sort__hot':
      return <Hot styles={stylesForControl} view={view} />;
    case 'sort__long':
      return <Long styles={stylesForControl} view={view} />;
  }
}
