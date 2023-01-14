import React from 'react';
import { Link } from 'react-router-dom';
import Icons from '../../../../../Icons';

interface TopProps {
  styles: {
    button: string;
    control__svg: string;
    'control__svg-path': string;
    control__label: string;
    'control__svg-arrow': string;
    'control__svg-arrow-path': string;
  };
  view?: 'toggle-button' | 'control';
}

export function Top({ styles, view }: TopProps): React.ReactElement {
  return (
    <Link className={styles['button']} to="/top">
      <Icons.Component
        block={Icons.TopIcons.sort}
        svgClassName={styles['control__svg']}
        svgPathClassName={styles['control__svg-path']}
      />
      <span className={styles['control__label']}>Top</span>
      {view === 'toggle-button' && (
        <Icons.Component
          block={Icons.ArrowIcons.sort}
          svgClassName={styles['control__svg-arrow']}
          svgPathClassName={styles['control__svg-arrow-path']}
        />
      )}
    </Link>
  );
}
