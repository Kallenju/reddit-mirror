import React, { useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import ToggleButton from './ToggleButton';
import Menu from './Menu';
import noop from '../../utils/noop';
import useIsMounted from '../../hooks/useIsMounted';
import useDropdownRoot from '../../hooks/useDropdownRoot';
import useIsDropdownOpen from '../../hooks/useIsDropdownOpen';
import useDropdownRootStyles from '../../hooks/useDropdownRootStyles';
import useOutsideClick from '../../hooks/useOutsideClick';

interface DropdownProps {
  styles: {
    [key: string]: string;
  };
  styleBlockName?: string;
  toggleButton: React.ReactNode;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent | MouseEvent) => void;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export function Dropdown({
  styles,
  styleBlockName = 'dropdown',
  toggleButton,
  children,
  onClick = noop,
  isOpen,
  onOpen = noop,
  onClose = noop,
}: DropdownProps): React.ReactElement {
  const [isMounted]: [boolean] = useIsMounted();

  const [dropdownRoot]: [HTMLDivElement | null] = useDropdownRoot();
  const handleSetDropdownRootStyles: (elem: HTMLElement | null) => void =
    useDropdownRootStyles();

  const refDropdownMenu: React.RefObject<HTMLDivElement> =
    useRef<HTMLDivElement>(null);
  const refToggleButton: React.RefObject<HTMLDivElement> =
    useRef<HTMLDivElement>(null);

  const [isDropdownOpen, setIsDropdownOpen]: [
    boolean | undefined,
    React.Dispatch<React.SetStateAction<boolean | undefined>>
  ] = useIsDropdownOpen({ isOpen, isMounted });

  const handleCloseDropdown = useCallback(
    (event: React.MouseEvent | MouseEvent): void => {
      onClick(event);
      onClose();
      setIsDropdownOpen(false);
    },
    [onClick, onClose, setIsDropdownOpen]
  );

  const handleOpenDropdown = useCallback(
    (event: React.MouseEvent | MouseEvent): void => {
      onClick(event);
      onOpen();
      handleSetDropdownRootStyles(refToggleButton.current);
      setIsDropdownOpen(true);
    },
    [handleSetDropdownRootStyles, onClick, onOpen, setIsDropdownOpen]
  );

  const handleToggleDropdown = useCallback(
    (event: React.MouseEvent | MouseEvent): void => {
      if (isOpen === undefined) {
        if (isDropdownOpen) {
          handleCloseDropdown(event);
        } else {
          handleOpenDropdown(event);
        }
      }
    },
    [handleCloseDropdown, handleOpenDropdown, isDropdownOpen, isOpen]
  );

  useOutsideClick({
    isMounted,
    refs: [refDropdownMenu, refToggleButton],
    callback: (event: MouseEvent) => {
      if (isDropdownOpen) {
        handleCloseDropdown(event);
      }
    },
  });

  return dropdownRoot ? (
    <div className={styles[`${styleBlockName}`]}>
      <ToggleButton
        toggleButton={toggleButton}
        onClick={handleToggleDropdown}
        ref={refToggleButton}
      />
      {isDropdownOpen &&
        createPortal(
          <Menu
            styleBlockName={styleBlockName}
            styles={styles}
            onClick={handleCloseDropdown}
            ref={refDropdownMenu}
          >
            {children}
          </Menu>,
          dropdownRoot
        )}
    </div>
  ) : (
    <></>
  );
}
