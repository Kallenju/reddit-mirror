import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { AppDispatch } from '../store';
import selectAllCommentForms from '../store/selectors/selectAllCommentForms';
import CommentFormText from '../interfaces/CommentFormText';
import { setCommentText as setCommentTextAction } from '../store/features/CommentFormsReducer/commentFormsActions';

export default function useCommentText(
  commentFormText: CommentFormText
): [CommentFormText, React.Dispatch<React.SetStateAction<CommentFormText>>] {
  const commentForms: RootState['commentForms'] = useSelector<
    RootState,
    RootState['commentForms']
  >(selectAllCommentForms);
  const dispatch: AppDispatch = useDispatch<AppDispatch>();
  const [commentText, setCommentText]: [
    CommentFormText,
    React.Dispatch<React.SetStateAction<CommentFormText>>
  ] = useState<CommentFormText>(
    (commentForms[commentFormText.id]?.value &&
      commentForms[commentFormText.id]) ||
      commentFormText
  );

  useEffect((): void => {
    dispatch(setCommentTextAction(commentText));
  }, [commentText, dispatch]);

  return [commentText, setCommentText];
}
