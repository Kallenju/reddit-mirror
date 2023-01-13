import { useState, useEffect } from 'react';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import selectToken from '../store/selectors/selectToken';
import RedditLongreadList from '../interfaces/RedditLongreadList';
import MirrorRedditLongreadData from '../interfaces/MirrorRedditLongreadData';

export default function useLongreadData(
  id: string
): [MirrorRedditLongreadData | null] {
  const [longreadMirrorData, setLongreadMirrorData]: [
    MirrorRedditLongreadData | null,
    React.Dispatch<React.SetStateAction<MirrorRedditLongreadData | null>>
  ] = useState<MirrorRedditLongreadData | null>(null);
  const token: RootState['token'] = useSelector<RootState, RootState['token']>(
    selectToken
  );

  useEffect((): (() => void) | void => {
    let ignore = false;

    async function startFetching() {
      const response: Response = await fetch(
        `https://oauth.reddit.com/by_id/${id}.json?sr_detail=true`,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const longreadData: RedditLongreadList = await response.json();

        if (!ignore) {
          setLongreadMirrorData({
            id: longreadData.data.children[0].data.id,
            title: longreadData.data.children[0].data.title,
            score: longreadData.data.children[0].data.score,
            num_comments: longreadData.data.children[0].data.num_comments,
            paragraphs: [
              longreadData.data.children[0].data.selftext,
              longreadData.data.children[0].data.selftext,
              longreadData.data.children[0].data.selftext,
              longreadData.data.children[0].data.selftext,
            ],
            figures: [
              longreadData.data.children[0].data.preview,
              longreadData.data.children[0].data.preview,
              longreadData.data.children[0].data.preview,
              longreadData.data.children[0].data.preview,
              longreadData.data.children[0].data.preview,
              longreadData.data.children[0].data.preview,
              longreadData.data.children[0].data.preview,
              longreadData.data.children[0].data.preview,
            ],
            figcaptions: [
              longreadData.data.children[0].data.selftext,
              longreadData.data.children[0].data.selftext,
              longreadData.data.children[0].data.selftext,
              longreadData.data.children[0].data.selftext,
              longreadData.data.children[0].data.selftext,
              longreadData.data.children[0].data.selftext,
              longreadData.data.children[0].data.selftext,
              longreadData.data.children[0].data.selftext,
            ],
            created_utc: longreadData.data.children[0].data.created_utc,
            sr_detail: {
              icon_img: longreadData.data.children[0].data.sr_detail.icon_img,
              url: longreadData.data.children[0].data.sr_detail.url,
            },
          });
        }
      }
    }

    if (token) {
      startFetching();

      return (): void => {
        ignore = true;
      };
    }
  }, [id, token]);

  return [longreadMirrorData];
}
