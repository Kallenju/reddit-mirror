import React from 'react';
import styles from './footer.module.styl';
import ControlBar from './ControlBar';
import noop from '../../../../utils/noop';

interface FooterProps {
  onClickComments?: (event: React.MouseEvent | MouseEvent) => void;
}

export function Footer({
  onClickComments = noop,
}: FooterProps): React.ReactElement {
  return (
    <div className={styles['footer']}>
      <ControlBar onClickComments={onClickComments} />
    </div>
  );
}
