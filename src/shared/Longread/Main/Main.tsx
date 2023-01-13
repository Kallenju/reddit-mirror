import React from 'react';
import styles from './main.module.styl';
import Figure from './Figure';
import Paragraph from './Paragraph';
import MirrorRedditPostData from '../../../interfaces/MirrorRedditPostData';

interface MainProps {
  paragraphs: Array<string>;
  figures: Array<MirrorRedditPostData['preview']>;
  figcaptions: Array<string>;
}

export function Main({
  paragraphs,
  figures,
  figcaptions,
}: MainProps): React.ReactElement {
  return (
    <div className={styles['main']}>
      <div className={styles['main__paragraph1']}>
        <Paragraph text={paragraphs[0]} />
      </div>
      <div className={styles['main__figure1']}>
        <Figure figure={figures[0]} figcaption={figcaptions[0]} />
      </div>
      <div className={styles['main__paragraph2']}>
        <Paragraph text={paragraphs[1]} />
      </div>
      <div className={styles['main__figure2']}>
        <Figure figure={figures[1]} figcaption={figcaptions[1]} />
      </div>
      <div className={styles['main__figure3']}>
        <Figure figure={figures[2]} figcaption={figcaptions[2]} />
      </div>
      <div className={styles['main__paragraph3']}>
        <Paragraph text={paragraphs[2]} />
      </div>
      <div className={styles['main__figure4']}>
        <Figure figure={figures[3]} figcaption={figcaptions[3]} />
      </div>
      <div className={styles['main__figure5']}>
        <Figure figure={figures[4]} figcaption={figcaptions[4]} />
      </div>
      <div className={styles['main__figure6']}>
        <Figure figure={figures[5]} figcaption={figcaptions[5]} />
      </div>
      <div className={styles['main__paragraph4']}>
        <Paragraph text={paragraphs[3]} />
      </div>
      <div className={styles['main__figure7']}>
        <Figure figure={figures[6]} figcaption={figcaptions[6]} />
      </div>
      <div className={styles['main__figure8']}>
        <Figure figure={figures[7]} figcaption={figcaptions[7]} />
      </div>
    </div>
  );
}
