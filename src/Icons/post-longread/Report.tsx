import React from 'react';

export enum ReportIcons {
  postControlBar = 'report__post-control-bar',
  postMenu = 'report__post-menu',
  longreadControlBar = 'report__longread-control-bar',
  shortreadControlBar = 'report__shortread-control-bar',
  commentControlBar = 'report__comment-control-bar',
}

interface ReportProps {
  block: ReportIcons;
  svgClassName: string;
  svgPathClassName: string;
}

export function Report({
  block,
  svgClassName,
  svgPathClassName,
}: ReportProps): React.ReactElement {
  switch (block) {
    case ReportIcons.postMenu:
    case ReportIcons.postControlBar:
    case ReportIcons.longreadControlBar:
    case ReportIcons.shortreadControlBar:
    case ReportIcons.commentControlBar:
      return (
        <svg
          className={svgClassName}
          width="14"
          height="12"
          viewBox="0 0 14 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={svgPathClassName}
            d="M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z"
            fill="#999999"
          />
        </svg>
      );
  }
}
