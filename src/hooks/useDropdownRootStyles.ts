import { useCallback } from 'react';
import useDropdownRoot from './useDropdownRoot';
import CoordinatesRelDoc from '../interfaces/CoordinatesRelDoc';
import getCoordinates from '../utils/getCoordinates';

export default function useDropdownRootStyles(): (
  elem: HTMLElement | null,
  isOpen: boolean
) => void {
  const [root]: [HTMLDivElement | null] = useDropdownRoot();

  const handleDropdownRootStyles: (
    elem: HTMLElement | null,
    isOpen: boolean
  ) => void = useCallback(
    (elem: HTMLElement | null, isOpen: boolean) => {
      const box: CoordinatesRelDoc =
        elem instanceof HTMLElement
          ? getCoordinates(elem)
          : {
              top: '0',
              right: '0',
              bottom: '0',
              left: '0',
            };

      if (root) {
        root.style.top = `${isOpen ? box.top : 0}px`;
        root.style.left = `${isOpen ? box.left : 0}px`;
        root.style.width = `${
          isOpen ? Number(box.right) - Number(box.left) : 0
        }px`;
        root.style.height = `${
          isOpen ? Number(box.bottom) - Number(box.top) : 0
        }px`;
      }
    },
    [root]
  );

  return handleDropdownRootStyles;
}
