import React from 'react';
import styles from './paragraph.module.styl';

interface ParagraphProps {
  text?: string;
}

export function Paragraph({ text }: ParagraphProps): React.ReactElement {
  return (
    <p className={styles['paragraph']}>
      {text ||
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus eros sem, non molestie massa tempor vitae. Aenean sit amet mi a ligula lobortis suscipit a ac ante. Aenean vel ultrices mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut in lorem augue. Aenean rhoncus, urna nec porta rutrum, metus neque feugiat felis, quis luctus dolor arcu vel nisi. Suspendisse ut ultrices dolor. Donec vel dui enim. Proin varius, turpis at tincidunt commodo, ipsum dolor hendrerit turpis, vitae consectetur velit diam id lorem. Quisque hendrerit justo id feugiat accumsan. Nullam vel dolor a risus porta sollicitudin. Mauris rutrum facilisis nulla, a suscipit lacus accumsan a.'}
    </p>
  );
}
