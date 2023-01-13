import React from 'react';
import GenericItem from '../../interfaces/GenericItem';
import noop from '../../utils/noop';

interface GenericListProps {
  items: Array<GenericItem>;
}

export function GenericList(props: GenericListProps): React.ReactElement {
  return (
    <>
      {props.items.map((item: GenericItem): React.ReactElement => {
        const {
          id,
          dataTestId,
          value,
          onClick,
          className,
          As = 'div',
          href,
        } = item;
        const Element = As;
        return (
          <Element
            key={id}
            data-test-id={dataTestId}
            className={className}
            href={href}
            onClick={onClick || noop}
          >
            {value}
          </Element>
        );
      })}
    </>
  );
}
