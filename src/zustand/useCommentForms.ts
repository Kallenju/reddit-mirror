import { create } from 'zustand';
import CommentForm from '../interfaces/CommentForm';
import CommentForms from '../interfaces/CommentForms';

interface CommentFormsState {
  commentForms: CommentForms;
  actions: {
    getCommentText: ({ id }: { id: string }) => string;
    setCommentText: ({ id, value }: { id: string; value: string }) => void;
  };
}

const useCommentForms = create<CommentFormsState>()((set, get) => ({
  commentForms: {},
  actions: {
    getCommentText: ({ id }: { id: string }): string => {
      const commentForms: CommentForms = get().commentForms;
      const commentForm: CommentForm | undefined = commentForms[id];

      return commentForm?.value || '';
    },

    setCommentText: ({ id, value }: { id: string; value: string }) =>
      set(
        (
          state: CommentFormsState
        ): {
          commentForms: CommentForms;
        } => {
          const newCommentFormsState: CommentForms = {
            ...state.commentForms,
          };
          let newComment: CommentForm | undefined = newCommentFormsState[id];

          if (newComment === undefined) {
            newComment = { id, value };
          }

          newComment.value = value;

          newCommentFormsState[id] = newComment;

          return {
            commentForms: newCommentFormsState,
          };
        }
      ),
  },
}));

export const useCommentFormsState = (): CommentFormsState['commentForms'] =>
  useCommentForms((state) => state.commentForms);

export const useCommentFormsActions = (): CommentFormsState['actions'] =>
  useCommentForms((state) => state.actions);
