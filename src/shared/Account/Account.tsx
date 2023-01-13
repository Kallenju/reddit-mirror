import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import styles from './account.module.styl';
import { RootState } from '../../store/store';
import selectToken from '../../store/selectors/selectToken';
import getLinkProps from '../../utils/getLinkProps';

interface AccountProps {
  userName?: string;
  userIcon?: string;
  view:
    | 'personal-header'
    | 'post-header'
    | 'comment-header'
    | 'longread-header'
    | 'shortread-header';
}

export function Account({
  userName,
  userIcon,
  view,
}: AccountProps): React.ReactElement {
  const token: RootState['token'] = useSelector<RootState, RootState['token']>(
    selectToken
  );
  const { href, ariaLabelledby } = useMemo(
    () => getLinkProps(view, userName, token),
    [view, userName, token]
  );

  return (
    <a
      className={`${styles['account']} ${styles[`account_view_${view}`]}`}
      href={href}
      aria-labelledby={ariaLabelledby}
    >
      <figure
        className={
          userIcon
            ? styles['account__bio-image-container']
            : styles['account__anon-container']
        }
      >
        {userIcon ? (
          <img
            className={`${styles['account__bio-image']}`}
            src={userIcon.replaceAll('amp;', '')}
            alt={userName}
            width="50"
            height="50"
          />
        ) : (
          <svg
            className={styles['account__anon-svg']}
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={styles['account__anon-svg-path']}
              d="M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z"
              fill="#d9d9d9"
            />
          </svg>
        )}
      </figure>

      <span
        className={
          userName ? styles['account__name'] : styles['account__anon-name']
        }
      >
        {userName || 'Аноним'}
      </span>
    </a>
  );
}
