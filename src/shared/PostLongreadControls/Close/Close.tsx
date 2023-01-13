import React from 'react';
import styles from './close.module.styl';
import Icons from '../../../Icons';
import noop from '../../../utils/noop';

interface CloseProps {
  commonStyles: {
    [key: string]: string;
  };
  view: 'longread-header' | 'shortread-header';
  onClick?: (event: React.MouseEvent | MouseEvent) => void;
}

export function Close({
  commonStyles,
  view,
  onClick = noop,
}: CloseProps): React.ReactElement {
  return (
    <div
      className={`${commonStyles['control']} ${
        commonStyles[`control_view_${view}`]
      } ${styles['close']} ${styles[`close_view_${view}`]}`}
    >
      <button
        className={commonStyles['control__button']}
        type="button"
        aria-label="Close longread"
        onClick={onClick}
      >
        <Icons.Component
          block={Icons.CloseIcons.longreadHeader}
          svgClassName={`${commonStyles['control__svg']} ${styles['close__svg']}`}
          svgPathClassName={`${commonStyles['control__svg-path']}`}
        />
      </button>
    </div>
  );
}
