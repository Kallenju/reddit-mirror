import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import CommentFormType from '../../interfaces/CommentForm';
import selectUser from '../../store/selectors/selectUser';
import useCommentText from '../../hooks/useCommentText';
import CommentForm from '../CommentForm';

interface CommentFormContainerProps {
  id: string;
}

export function CommentFormContainer({
  id,
}: CommentFormContainerProps): React.ReactElement {
  const user: RootState['user'] = useSelector<RootState, RootState['user']>(
    selectUser
  );
  const [commentText, setCommentText]: [
    CommentFormType,
    React.Dispatch<React.SetStateAction<CommentFormType>>
  ] = useCommentText({ id, value: '' });

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
      textAreaValue={commentText.value}
      placeholder={`${user.data.name}, leave a comment`}
      view="comment"
    />
  );
}
