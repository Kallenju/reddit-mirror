import React from 'react';
import styles from './togglebutton.module.styl';

interface ToggleButtonProps {
  activejs?: boolean;
}

export function ToggleButton({
  activejs,
}: ToggleButtonProps): React.ReactElement {
  return (
    <button
      className={
        activejs
          ? `${styles['toggle-button']} ${styles['toggle-button_activejs']}`
          : styles['toggle-button']
      }
      type="button"
      aria-label="Открыть меню"
    >
      <svg
        className={styles['toggle-button__svg']}
        width="31"
        height="31"
        viewBox="0 0 31 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.5 18C22.1193 18 21 16.8807 21 15.5C21 14.1193 22.1193 13 23.5 13C24.8807 13 26 14.1193 26 15.5C26 16.8807 24.8807 18 23.5 18Z"
          fill="#d9d9d9"
        />
        <path
          d="M16 18C14.6193 18 13.5 16.8807 13.5 15.5C13.5 14.1193 14.6193 13 16 13C17.3807 13 18.5 14.1193 18.5 15.5C18.5 16.8807 17.3807 18 16 18Z"
          fill="#d9d9d9"
        />
        <path
          d="M8.5 18C7.11929 18 6 16.8807 6 15.5C6 14.1193 7.11929 13 8.5 13C9.88071 13 11 14.1193 11 15.5C11 16.8807 9.88071 18 8.5 18Z"
          fill="#d9d9d9"
        />
        <path
          className={styles['toggle-button__svg-back-circle']}
          d="M31 15.5C31 24.0604 24.0604 31 15.5 31C6.93959 31 0 24.0604 0 15.5C0 6.93959 6.93959 0 15.5 0C24.0604 0 31 6.93959 31 15.5Z"
          fill="#333"
          fillOpacity="0.1"
        />
      </svg>
    </button>
  );
}
