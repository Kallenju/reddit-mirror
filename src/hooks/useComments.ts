import { useState, useEffect } from 'react';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import selectToken from '../store/selectors/selectToken';
import RedditComment from '../interfaces/RedditComment';
import RedditComments from '../interfaces/RedditComments';
import MirrorRedditComments from '../interfaces/MirrorRedditComments';
import MirrorRedditCommentReplyData from '../interfaces/MirrorRedditCommentReplyData';
import createMirrorRedditCommentReplyData from '../utils/createMirrorRedditCommentReplyData';

export default function useComments(id: string): [MirrorRedditComments] {
  const [redditCommentsMirrorData, setRedditCommentsMirrorData]: [
    MirrorRedditComments,
    React.Dispatch<React.SetStateAction<MirrorRedditComments>>
  ] = useState<MirrorRedditComments>({
    post: {
      id: '',
      title: '',
      score: 0,
      preview: null,
      created_utc: 0,
      num_comments: 0,
      sr_detail: {
        icon_img: '',
        url: '',
      },
    },
    comments: [],
  });
  const token: RootState['token'] = useSelector<RootState, RootState['token']>(
    selectToken
  );

  useEffect((): (() => void) | void => {
    let ignore = false;

    const idForFetch: string = id.replace('t3_', '');

    async function startFetching() {
      const response: Response = await fetch(
        `https://oauth.reddit.com/comments/${idForFetch}.json?sr_detail=true`,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const redditComments: RedditComments = await response.json();

        const dataToBeSetted: MirrorRedditComments = {
          post: {
            id: redditComments[0].data.children[0].data.name,
            title: redditComments[0].data.children[0].data.title,
            score: redditComments[0].data.children[0].data.score,
            preview: redditComments[0].data.children[0].data.preview,
            created_utc: redditComments[0].data.children[0].data.created_utc,
            num_comments: redditComments[0].data.children[0].data.num_comments,
            sr_detail: {
              icon_img:
                redditComments[0].data.children[0].data.sr_detail.icon_img,
              url: redditComments[0].data.children[0].data.sr_detail.url,
            },
          },
          comments: redditComments[1].data.children.map(
            (comment: RedditComment): MirrorRedditCommentReplyData => {
              return {
                id: comment.data.name,
                name: comment.data.author,
                icon: '',
                text: comment.data.body,
                created_utc: comment.data.created_utc,
                replies: createMirrorRedditCommentReplyData(comment),
              };
            }
          ),
        };
        setRedditCommentsMirrorData(dataToBeSetted);
      }
    }

    if (token && !ignore) {
      startFetching();

      return (): void => {
        ignore = true;
      };
    }
  }, [id, token]);

  return [redditCommentsMirrorData];
}
