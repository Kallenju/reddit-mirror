import React from 'react';

export enum SaveIcons {
  postControlBar = 'save__post-control-bar',
  postMenu = 'save__post-menu',
  longreadControlBar = 'save__longread-control-bar',
  shortreadControlBar = 'save__shortread-control-bar',
}

interface SaveProps {
  block: SaveIcons;
  svgClassName: string;
  svgPathClassName: string;
}

export function Save({
  block,
  svgClassName,
  svgPathClassName,
}: SaveProps): React.ReactElement {
  switch (block) {
    case SaveIcons.longreadControlBar:
    case SaveIcons.shortreadControlBar:
    case SaveIcons.postMenu:
      return (
        <svg
          className={svgClassName}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={svgPathClassName}
            d="M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z"
            fill="#999999"
          />
        </svg>
      );
    case SaveIcons.postControlBar:
      return (
        <svg
          className={svgClassName}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={svgPathClassName}
            d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z"
            fill="#C4C4C4"
          />
          <path
            d="M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z"
            fill="white"
          />
        </svg>
      );
  }
}
