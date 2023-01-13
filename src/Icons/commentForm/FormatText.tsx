import React from 'react';

export enum FormatTextIcons {
  commentForm = 'format-text__comment-form',
}

interface FormatTextProps {
  block: FormatTextIcons;
  svgClassName: string;
  svgPathClassName: string;
}

export function FormatText({
  block,
  svgClassName,
  svgPathClassName,
}: FormatTextProps): React.ReactElement {
  switch (block) {
    case FormatTextIcons.commentForm:
      return (
        <svg
          className={svgClassName}
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={svgPathClassName}
            d="M7.75 0H6.25L1.5 11H3.6L4.5 8.8H9.5L10.4 11H12.5L7.75 0ZM5.13 7L7 1.98L8.87 7H5.13ZM15.5 15L12.5 12V14H0V16H12.5V18L15.5 15Z"
            fill="#999999"
          />
        </svg>
      );
  }
}
