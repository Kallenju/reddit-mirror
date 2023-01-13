import React, { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import selectUser from '../../store/selectors/selectUser';
import CommentForm from '../CommentForm';
import {
  useCommentFormsState,
  useCommentFormsActions,
} from '../../zustand/useCommentForms';

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
  const { value } = useCommentFormsState()[id] || { value: '' };
  const { setCommentText } = useCommentFormsActions();

  useEffect(() => {
    if (user && !value) {
      setCommentText({
        id,
        value: `${replyTo || 'Аноним'},`,
      });
    }
  }, [id, user, replyTo, value, setCommentText]);

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
          value: `${replyTo || 'Аноним'},`,
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
      textAreaValue={value}
      view="reply"
    />
  );
}
