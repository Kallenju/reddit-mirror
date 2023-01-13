import React from 'react';

export enum CopyTextIcons {
  commentForm = 'copy-text__comment-form',
}

interface CopyTextProps {
  block: CopyTextIcons;
  svgClassName: string;
  svgPathClassName: string;
}

export function CopyText({
  block,
  svgClassName,
  svgPathClassName,
}: CopyTextProps): React.ReactElement {
  switch (block) {
    case CopyTextIcons.commentForm:
      return (
        <svg
          className={svgClassName}
          width="14"
          height="17"
          viewBox="0 0 14 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={svgPathClassName}
            d="M14 6H10V0H4V6H0L7 13L14 6ZM0 15V17H14V15H0Z"
            fill="#999999"
          />
        </svg>
      );
  }
}
