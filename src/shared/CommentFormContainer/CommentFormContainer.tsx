import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import selectUser from '../../store/selectors/selectUser';
import CommentForm from '../CommentForm';
import {
  useCommentFormsState,
  useCommentFormsActions,
} from '../../zustand/useCommentForms';

interface CommentFormContainerProps {
  id: string;
}

export function CommentFormContainer({
  id,
}: CommentFormContainerProps): React.ReactElement {
  const user: RootState['user'] = useSelector<RootState, RootState['user']>(
    selectUser
  );
  const { value } = useCommentFormsState()[id] || { value: '' };
  const { setCommentText } = useCommentFormsActions();

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
        setCommentText({ id, value: '' });
      }
    },
    [id, setCommentText]
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
      placeholder={`${user.data.name}, оставьте ваш комментарий`}
      view="comment"
    />
  );
}
