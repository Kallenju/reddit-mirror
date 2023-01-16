import React, { forwardRef } from 'react';

interface MenuProps {
  children: React.ReactNode;
  styles: {
    [key: string]: string;
  };
  styleBlockName: string;
  onClick: (event: React.MouseEvent | MouseEvent) => void;
}

const Menu: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<MenuProps> & React.RefAttributes<HTMLDivElement>
> = forwardRef(function Menu(
  props: MenuProps,
  ref: React.ForwardedRef<HTMLDivElement>
): React.ReactElement {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className={props.styles[`${props.styleBlockName}__dropdown`]}
      onClick={props.onClick}
      ref={ref}
    >
      {props.children}
      <button
        className={
          props.styles[`${props.styleBlockName}__dropdown-close-button`]
        }
      >
        Close
      </button>
    </div>
  );
});

export { Menu };
