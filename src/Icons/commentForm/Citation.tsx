import React from 'react';

export enum CitationIcons {
  commentForm = 'citation__comment-form',
}

interface CitationProps {
  block: CitationIcons;
  svgClassName: string;
  svgPathClassName: string;
}

export function Citation({
  block,
  svgClassName,
  svgPathClassName,
}: CitationProps): React.ReactElement {
  switch (block) {
    case CitationIcons.commentForm:
      return (
        <svg
          className={svgClassName}
          width="20"
          height="12"
          viewBox="0 0 20 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={svgPathClassName}
            d="M7.4 10.6L2.8 6L7.4 1.4L6 0L0 6L6 12L7.4 10.6ZM12.6 10.6L17.2 6L12.6 1.4L14 0L20 6L14 12L12.6 10.6Z"
            fill="#999999"
          />
        </svg>
      );
  }
}
