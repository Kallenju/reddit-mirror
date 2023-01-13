import React, { useEffect } from 'react';
import styles from './commentform.module.styl';
import ReactHookForm, { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import ControlBar from './ControlBar';

interface CommentFormProps {
  onValidSubmitHandler: ReactHookForm.SubmitHandler<{
    [key: string]: string;
  }>;
  onChangeHandler: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  textAreaValue: string;
  placeholder?: string;
  view: 'comment' | 'reply';
}

function CommentForm({
  onValidSubmitHandler,
  onChangeHandler,
  textAreaValue,
  placeholder,
  view,
}: CommentFormProps): React.ReactElement {
  const {
    register,
    handleSubmit,
    setFocus,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    criteriaMode: 'all',
    shouldFocusError: true,
  });
  const { name, onChange, onBlur, ref } = register(`${view}`, {
    required: {
      value: true,
      message: 'Cannot be empty',
    },
    maxLength: {
      value: 280,
      message: 'Max length is 280',
    },
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      clearErrors(`${view}`);
      onChangeHandler(event);
    },
  });

  useEffect(() => {
    if (view === 'reply') {
      setFocus(name);
    }
  }, [name, setFocus, view]);

  return (
    <form
      className={`${styles['comment-form']} ${
        styles[`comment-form_view_${view}`]
      }`}
      onSubmit={handleSubmit(onValidSubmitHandler)}
    >
      <label
        className={`${styles['comment-form__label']} ${styles['comment-form__label_hidden']}`}
        htmlFor="textareaForComment"
      >
        Field for comment
      </label>
      <textarea
        id="textareaForComment"
        className={styles['comment-form__textarea']}
        name={name}
        value={textAreaValue}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
      />
      <div className={styles['comment-form__controls']}>
        <ControlBar />
        <button className={styles['comment-form__submit-button']} type="submit">
          {view === 'comment' ? 'Comment' : 'Reply'}
        </button>
      </div>

      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p className={styles['comment-form__textarea-message']}>{message}</p>
        )}
      />
    </form>
  );
}

export { CommentForm };
