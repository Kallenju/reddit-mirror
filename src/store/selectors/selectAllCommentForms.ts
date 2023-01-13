import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import CommentForms from '../../interfaces/CommentForms';

const selectSelf = (state: RootState): RootState => state;

const selectAllCommentForms: (state: RootState) => CommentForms =
  createDraftSafeSelector(selectSelf, (state: RootState): CommentForms => {
    return state.commentForms;
  });

export default selectAllCommentForms;
