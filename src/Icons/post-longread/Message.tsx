import React from 'react';

export enum MessageIcons {
  message = 'message',
}

interface MessageProps {
  block: MessageIcons;
  svgClassName: string;
  svgPathClassName: string;
}

export function Message({
  block,
  svgClassName,
  svgPathClassName,
}: MessageProps): React.ReactElement {
  switch (block) {
    case MessageIcons.message:
      return (
        <svg
          className={svgClassName}
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={svgPathClassName}
            d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z"
            fill="#D9D9D9"
          />
        </svg>
      );
  }
}
