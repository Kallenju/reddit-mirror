import { useCallback } from 'react';
import useModalRoot from './useModalRoot';

export default function useModalRootStyles(): (
  isLongreadOpen: boolean
) => void {
  const [root]: [HTMLDivElement | null] = useModalRoot();

  const handleModalRootStyles: (isLongreadOpen: boolean) => void = useCallback(
    (isLongreadOpen: boolean): void => {
      if (isLongreadOpen) {
        let longreadTopCoor: number = window.pageYOffset;
        const longreadBottomCoor: number =
          window.pageYOffset + window.innerHeight;
        const mainTopCoor: number =
          document.body.querySelector('main')?.getBoundingClientRect().top || 0;

        if (mainTopCoor > 0) {
          longreadTopCoor += mainTopCoor;
        } else {
          longreadTopCoor += 30;
        }

        if (root) {
          root.style.top = `${longreadTopCoor}px`;
          root.style.height = `${longreadBottomCoor - longreadTopCoor}px`;
        }

        document.body.style.overflow = 'hidden';
      } else {
        if (root) {
          root.style.top = '0';
          root.style.height = '0';
        }

        document.body.style.overflow = 'auto';
      }
    },
    [root]
  );

  return handleModalRootStyles;
}
