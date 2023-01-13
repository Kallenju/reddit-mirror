import React from 'react';

export enum CloseIcons {
  longreadHeader = 'close__longread-header',
  shortreadHeader = 'close__short-header',
}

interface CloseProps {
  block: CloseIcons;
  svgClassName: string;
  svgPathClassName: string;
}

export function Close({
  block,
  svgClassName,
  svgPathClassName,
}: CloseProps): React.ReactElement {
  switch (block) {
    case CloseIcons.longreadHeader:
    case CloseIcons.shortreadHeader:
      return (
        <svg
          className={svgClassName}
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={svgPathClassName}
            d="M20.0455 4.05529e-05L21 0.954583L0.9546 21L5.87413e-05 20.0455L20.0455 4.05529e-05Z"
            fill="#D9D9D9"
          />
          <path
            className={svgPathClassName}
            d="M20.9999 20.0454L20.0454 21L0 0.954543L0.954542 0L20.9999 20.0454Z"
            fill="#D9D9D9"
          />
        </svg>
      );
  }
}
