import React from 'react';

export enum KarmaIcons {
  up = 'karma__up',
  down = 'karma__down',
}

interface KarmaProps {
  block: KarmaIcons;
  svgClassName: string;
  svgPathClassName: string;
}

export function Karma({
  block,
  svgClassName,
  svgPathClassName,
}: KarmaProps): React.ReactElement {
  switch (block) {
    case KarmaIcons.up:
      return (
        <svg
          className={svgClassName}
          width="19"
          height="10"
          viewBox="0 0 19 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={svgPathClassName}
            d="M9.5 0L0 10H19L9.5 0Z"
            fill="#C4C4C4"
          />
        </svg>
      );
    case KarmaIcons.down:
      return (
        <svg
          className={svgClassName}
          width="19"
          height="10"
          viewBox="0 0 19 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={svgPathClassName}
            d="M9.5 10L19 1.66103e-06L0 0L9.5 10Z"
            fill="#C4C4C4"
          />
        </svg>
      );
  }
}
