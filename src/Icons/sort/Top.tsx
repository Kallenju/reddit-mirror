import React from 'react';

export enum TopIcons {
  sort = 'top__sort',
}

interface TopProps {
  block: TopIcons;
  svgClassName: string;
  svgPathClassName: string;
}

export function Top({
  block,
  svgClassName,
  svgPathClassName,
}: TopProps): React.ReactElement {
  switch (block) {
    case TopIcons.sort:
      return (
        <svg
          className={svgClassName}
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={svgPathClassName}
            d="M8.5 12.8589L13.753 16L12.359 10.08L17 6.09684L10.8885 5.58316L8.5 0L6.1115 5.58316L0 6.09684L4.641 10.08L3.247 16L8.5 12.8589Z"
            fill="#CC6633"
          />
        </svg>
      );
  }
}
