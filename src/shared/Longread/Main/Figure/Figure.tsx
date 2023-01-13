import React from 'react';
import styles from './figure.module.styl';
import MirrorRedditPostData from '../../../../interfaces/MirrorRedditPostData';
import generateRandomString from '../../../../utils/generateRandomString';

interface FigureProps {
  figure?: MirrorRedditPostData['preview'];
  figcaption?: string;
}

export function Figure({
  figure,
  figcaption,
}: FigureProps): React.ReactElement {
  return (
    <figure className={styles['figure']}>
      {figure ? (
        <picture>
          {figure.images[0].resolutions.map(
            (resolution: {
              url: string;
              width: number;
              height: number;
            }): React.ReactElement => {
              return (
                <source
                  key={generateRandomString()}
                  type="image/png"
                  media={`(max-width: ${resolution.width + 40}px)`}
                  width={resolution.width}
                  height={resolution.height}
                  srcSet={resolution.url.replaceAll('amp;', '')}
                />
              );
            }
          )}
          <img
            className={styles['figure__image']}
            src={figure.images[0].source.url.replaceAll('amp;', '')}
            alt={figcaption || 'Aenean egestas hendrerit tincidunt.'}
            width={figure.images[0].source.width}
            height={figure.images[0].source.height}
          />
        </picture>
      ) : (
        <img
          className={styles['figure__image']}
          src="/static/images/raster/post/no-image.jpg"
          alt=""
          width="1920"
          height="1440"
        />
      )}
      <figcaption className={styles['figure__caption']}>
        {figcaption ||
          'Aenean egestas hendrerit tincidunt. Curabitur sit amet tellus in libero porttitor consectetur. Aenean vehicula leo quam, id consequat felis feugiat vel.'}
      </figcaption>
    </figure>
  );
}
