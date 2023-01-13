import React from 'react';
import styles from './preview.module.styl';
import generateRandomString from '../../../../utils/generateRandomString';
import MirrorRedditPostData from '../../../../interfaces/MirrorRedditPostData';

interface PreviewProps {
  title: string;
  preview: MirrorRedditPostData['preview'];
}

export function Preview({ title, preview }: PreviewProps): React.ReactElement {
  return (
    <figure className={styles.preview}>
      {preview ? (
        <picture>
          {preview.images[0].resolutions.map(
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
            className={styles['preview__image']}
            src={preview.images[0].source.url.replaceAll('amp;', '')}
            alt={`preview of ${title}`}
            width={preview.images[0].source.width}
            height={preview.images[0].source.height}
          />
        </picture>
      ) : (
        <img
          className={styles['preview__image']}
          src="/static/images/raster/post/no-image.jpg"
          alt=""
          width="1920"
          height="1440"
        />
      )}
    </figure>
  );
}
