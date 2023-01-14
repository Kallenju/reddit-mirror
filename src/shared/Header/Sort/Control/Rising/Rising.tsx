import React from 'react';
import Icons from '../../../../../Icons';
import { Link } from 'react-router-dom';

interface RisingProps {
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

export function Rising({ styles, view }: RisingProps): React.ReactElement {
  return (
    <Link className={styles['button']} to="/rising">
      <Icons.Component
        block={Icons.RisingIcons.sort}
        svgClassName={styles['control__svg']}
        svgPathClassName={styles['control__svg-path']}
      />
      <span className={styles['control__label']}>Rising</span>
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
