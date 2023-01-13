import { useState, useEffect } from 'react';

export default function useDropdownRoot(): [HTMLDivElement | null] {
  const [dropdownRoot, setDropdownRoot]: [
    HTMLDivElement | null,
    React.Dispatch<React.SetStateAction<HTMLDivElement | null>>
  ] = useState<HTMLDivElement | null>(null);

  useEffect((): void => {
    const root = document.body.querySelector('#dropdown-root');

    if (!root) {
      const root = document.createElement('div');
      document.body.append(root);
      root.setAttribute('id', 'dropdown-root');
      setDropdownRoot(root);
    } else {
      if (root instanceof HTMLDivElement) {
        setDropdownRoot(root);
      }
    }
  }, []);

  return [dropdownRoot];
}
