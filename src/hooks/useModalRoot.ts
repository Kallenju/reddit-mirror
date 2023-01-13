import { useState, useEffect } from 'react';

export default function useModalRoot(): [HTMLDivElement | null] {
  const [modalRoot, setModalRoot]: [
    HTMLDivElement | null,
    React.Dispatch<React.SetStateAction<HTMLDivElement | null>>
  ] = useState<HTMLDivElement | null>(null);

  useEffect((): void => {
    const root = document.body.querySelector('#modal-root');

    if (!root) {
      const root = document.createElement('div');
      document.body.append(root);
      root.setAttribute('id', 'modal-root');
      setModalRoot(root);
    } else {
      if (root instanceof HTMLDivElement) {
        setModalRoot(root);
      }
    }
  }, []);

  return [modalRoot];
}
