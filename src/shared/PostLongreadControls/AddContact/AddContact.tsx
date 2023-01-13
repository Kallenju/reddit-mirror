import React from 'react';
import styles from './addcontact.module.styl';
import Icons from '../../../Icons';
import noop from '../../../utils/noop';

interface AddContactProps {
  commonStyles: {
    [key: string]: string;
  };
  view: 'comment-form';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function AddContact({
  commonStyles,
  view,
  onClick,
}: AddContactProps): React.ReactElement {
  return (
    <div
      className={`${commonStyles['control']} ${
        commonStyles[`control_view_${view}`]
      } ${styles['add-contact']} ${styles[`add-contact_view_${view}`]}`}
    >
      <button
        className={commonStyles['control__button']}
        type="button"
        aria-label="Add contact"
        onClick={onClick || noop}
      >
        <Icons.Component
          block={Icons.AttachIcons.commentForm}
          svgClassName={`${commonStyles['control__svg']} ${styles['add-contact__svg']}`}
          svgPathClassName={`${commonStyles['control__svg-path']}`}
        />
      </button>
    </div>
  );
}
