import React from 'react';

export enum LongIcons {
  sort = 'long__sort',
}

interface LongProps {
  block: LongIcons;
  svgClassName: string;
  svgPathClassName: string;
}

export function Long({
  block,
  svgClassName,
  svgPathClassName,
}: LongProps): React.ReactElement {
  switch (block) {
    case LongIcons.sort:
      return (
        <svg
          className={svgClassName}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={svgPathClassName}
            d="M11.0612 16H4.93878V7.91919H0L8 0L16 7.91919H11.0612V16Z"
            fill="#CC6633"
          />
        </svg>
      );
  }
}
