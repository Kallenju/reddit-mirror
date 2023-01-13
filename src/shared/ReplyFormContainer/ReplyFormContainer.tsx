import React, { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import MirrorRedditUser from '../../interfaces/MirrorRedditUser';
import CommentFormType from '../../interfaces/CommentForm';
import selectUser from '../../store/selectors/selectUser';
import useCommentText from '../../hooks/useCommentText';
import CommentForm from '../CommentForm';

interface ReplyFormContainerProps {
  id: string;
  replyTo: string;
  onValidSubmit: (
    event: React.BaseSyntheticEvent<object, React.FormEvent, React.FormEvent>
  ) => void;
}

export function ReplyFormContainer({
  id,
  replyTo,
  onValidSubmit,
}: ReplyFormContainerProps): React.ReactElement {
  const user: RootState['user'] = useSelector<RootState, RootState['user']>(
    selectUser
  );
  const [commentText, setCommentText]: [
    CommentFormType,
    React.Dispatch<React.SetStateAction<CommentFormType>>
  ] = useCommentText({ id, value: '' });

  useEffect(() => {
    if (user && !commentText.value) {
      setCommentText({
        id,
        value: `${replyTo || 'Anonymous'},`,
      });
    }
  }, [id, user, replyTo, commentText, setCommentText]);

  const handleOnSubmit = useCallback(
    (
      data: {
        [key: string]: string;
      },
      event?: React.BaseSyntheticEvent<object, React.FormEvent, React.FormEvent>
    ) => {
      if (event) {
        event.preventDefault();
        console.log(JSON.stringify(data));
        setCommentText({
          id,
          value: `${replyTo || 'Anonymous'},`,
        });
        onValidSubmit(event);
      }
    },
    [id, onValidSubmit, replyTo, setCommentText]
  );

  const handleOnChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCommentText({
        id,
        value: event.target.value,
      });
    },
    [id, setCommentText]
  );

  return (
    <CommentForm
      onValidSubmitHandler={handleOnSubmit}
      onChangeHandler={handleOnChange}
      textAreaValue={commentText.value}
      view="reply"
    />
  );
}
