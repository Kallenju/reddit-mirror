import React from 'react';
import styles from './postssearch.module.styl';
import Icons from '../../../../Icons';

export function PostsSearch(): React.ReactElement {
  return (
    <form className={styles['posts-search']} name="posts-search">
      <fieldset className={styles['posts-search__fieldset']}>
        <legend className={styles['posts-search__fieldset-legend']}>
          Search posts
        </legend>
        <label
          className={styles['posts-search__label']}
          htmlFor="posts-search-input"
        >
          Search request
        </label>
        <div className={styles['posts-search__input-wrapper']}>
          <input
            className={styles['posts-search__input']}
            id="posts-search-input"
            type="text"
            placeholder="Search"
            required
          />
          <Icons.Component
            block={Icons.SearchIcons.searchBlock}
            svgClassName={styles['posts-search__search-icon']}
            svgPathClassName={styles['posts-search__search-icon-path']}
          />
        </div>
      </fieldset>
    </form>
  );
}
