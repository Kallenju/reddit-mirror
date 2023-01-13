import React, { forwardRef } from 'react';

interface ToggleButtonProps {
  toggleButton: React.ReactNode;
  onClick: (event: React.MouseEvent | MouseEvent) => void;
}

const ToggleButton: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<ToggleButtonProps> & React.RefAttributes<HTMLDivElement>
> = forwardRef(function ToggleButton(
  props: ToggleButtonProps,
  ref: React.ForwardedRef<HTMLDivElement>
): React.ReactElement {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div onClick={props.onClick} ref={ref}>
      {props.toggleButton}
    </div>
  );
});

export { ToggleButton };
