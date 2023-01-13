import React from 'react';
import styles from './karma.module.styl';
import Icons from '../../../Icons';

interface KarmaProps {
  commonStyles: {
    [key: string]: string;
  };
  view:
    | 'post-control-bar'
    | 'post-body'
    | 'longread-header'
    | 'shortread-header';
  karma?: number;
}

export function Karma({
  commonStyles,
  view,
  karma,
}: KarmaProps): React.ReactElement {
  return (
    <div
      className={`${commonStyles['control']} ${
        commonStyles[`control_view_${view}`]
      } ${styles['karma']} ${styles[`karma_view_${view}`]}`}
    >
      <button
        className={`${commonStyles['control__button']} ${styles['karma__button-up']}`}
        type="button"
        aria-label="Повысить карму"
      >
        <Icons.Component
          block={Icons.KarmaIcons.up}
          svgClassName={`${commonStyles['control__svg']} ${styles['karma__svg-up']}`}
          svgPathClassName={`${commonStyles['control__svg-path']} ${styles['karma__svg-up-path']}`}
        />
      </button>
      <span
        className={`${commonStyles['control__counter']} ${styles['karma__counter']}`}
      >
        {karma || 0}
      </span>
      <button
        className={`${commonStyles['control__button']} ${styles['karma__button-down']}`}
        type="button"
        aria-label="Понизить карму"
      >
        <Icons.Component
          block={Icons.KarmaIcons.down}
          svgClassName={`${commonStyles['control__svg']} ${styles['karma__svg-down']}`}
          svgPathClassName={`${commonStyles['control__svg-path']} ${styles['karma__svg-down-path']}`}
        />
      </button>
    </div>
  );
}
