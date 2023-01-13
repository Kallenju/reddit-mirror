import { useCallback } from 'react';
import useDropdownRoot from './useDropdownRoot';
import CoordinatesRelDoc from '../interfaces/CoordinatesRelDoc';
import getCoordinates from '../utils/getCoordinates';

export default function useDropdownRootStyles(): (
  elem: HTMLElement | null
) => void {
  const [root]: [HTMLDivElement | null] = useDropdownRoot();

  const handleDropdownRootStyles: (elem: HTMLElement | null) => void =
    useCallback(
      (elem: HTMLElement | null) => {
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
          root.style.top = `${box.top}px`;
          root.style.left = `${box.left}px`;
          root.style.width = `${Number(box.right) - Number(box.left)}px`;
          root.style.height = `${Number(box.bottom) - Number(box.top)}px`;
        }
      },
      [root]
    );

  return handleDropdownRootStyles;
}
