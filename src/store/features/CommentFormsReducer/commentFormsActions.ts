import RTK, { createAction } from '@reduxjs/toolkit';
import { SET_COMMENT_TEXT } from './commentFormsConstants';
import SetCommentTextType from '../../../interfaces/SetCommentText';

export const setCommentText: RTK.PayloadActionCreator<
  SetCommentTextType['payload'],
  SetCommentTextType['type'],
  (
    commentText: SetCommentTextType['payload']
  ) => Pick<SetCommentTextType, 'payload'>
> = createAction<
  (
    commentText: SetCommentTextType['payload']
  ) => Pick<SetCommentTextType, 'payload'>,
  SetCommentTextType['type']
>(
  SET_COMMENT_TEXT,
  (
    commentText: SetCommentTextType['payload']
  ): Pick<SetCommentTextType, 'payload'> => {
    return {
      payload: commentText,
    };
  }
);
