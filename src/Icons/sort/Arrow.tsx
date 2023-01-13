import React from 'react';

export enum ArrowIcons {
  sort = 'arrow__sort',
}

interface ArrowProps {
  block: ArrowIcons;
  svgClassName: string;
  svgPathClassName: string;
}

export function Arrow({
  block,
  svgClassName,
  svgPathClassName,
}: ArrowProps): React.ReactElement {
  switch (block) {
    case ArrowIcons.sort:
      return (
        <svg
          className={svgClassName}
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={svgPathClassName}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 8L0 0.712162L0.757933 0L7 6.49874L13.2421 1.0914e-06L14 0.712164L7 8Z"
            fill="#CC6633"
          />
        </svg>
      );
  }
}
