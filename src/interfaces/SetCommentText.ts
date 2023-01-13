import { SET_COMMENT_TEXT } from '../store/features/CommentFormsReducer/commentFormsConstants';
import CommentFormText from './CommentFormText';

interface SetCommentText {
  type: typeof SET_COMMENT_TEXT;
  payload: CommentFormText;
}

export { type SetCommentText as default };
