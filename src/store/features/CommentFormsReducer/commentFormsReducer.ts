import RTK, { createReducer } from '@reduxjs/toolkit';
import { SET_COMMENT_TEXT } from './commentFormsConstants';
import CommentForm from '../../../interfaces/CommentForm';
import CommentForms from '../../../interfaces/CommentForms';
import SetCommentTextType from '../../../interfaces/SetCommentText';

const commentFormsReducer: RTK.Reducer<CommentForms> =
  createReducer<CommentForms>(
    {},
    (builder: RTK.ActionReducerMapBuilder<CommentForms>): void => {
      builder.addCase(
        SET_COMMENT_TEXT,
        (
          state: RTK.Draft<CommentForms>,
          action: SetCommentTextType
        ): CommentForms => {
          let newComment: CommentForm | undefined = state[action.payload.id];

          if (newComment === undefined) {
            newComment = { id: action.payload.id, value: action.payload.value };
          }

          newComment.value = action.payload.value;

          state[action.payload.id] = newComment;

          return state;
        }
      );
    }
  );

export default commentFormsReducer;
