import { useState, useEffect } from 'react';

interface UseIsDropdownOpen {
  isOpen?: boolean;
  isMounted: boolean;
}

export default function useIsDropdownOpen({
  isOpen,
  isMounted,
}: UseIsDropdownOpen): [
  boolean | undefined,
  React.Dispatch<React.SetStateAction<boolean | undefined>>
] {
  const [isDropdownOpen, setIsDropdownOpen]: [
    boolean | undefined,
    React.Dispatch<React.SetStateAction<boolean | undefined>>
  ] = useState<boolean | undefined>(isOpen);
  useEffect((): void => {
    if (isMounted && isOpen !== undefined) {
      setIsDropdownOpen(isOpen);
    }
  }, [isOpen, isMounted]);

  return [isDropdownOpen, setIsDropdownOpen];
}
