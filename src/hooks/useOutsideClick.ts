import { useCallback, useEffect } from 'react';

interface UseOutsideClickProps {
  isMounted: boolean;
  refs: Array<React.RefObject<Node>>;
  callback: (event: MouseEvent) => void;
}

export default function useOutsideClick({
  isMounted,
  refs,
  callback,
}: UseOutsideClickProps): (event: MouseEvent) => void {
  const handleOutsideClick = useCallback(
    (event: MouseEvent): void => {
      if (
        refs.every((ref: React.RefObject<Node>): boolean => {
          if (event.target instanceof Node) {
            return !ref.current?.contains(event.target);
          }

          return true;
        })
      ) {
        callback(event);
      }
    },
    [callback, refs]
  );

  useEffect((): (() => void) | void => {
    if (isMounted) {
      document.addEventListener('click', handleOutsideClick);

      return (): void => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }
  }, [handleOutsideClick, isMounted]);

  return handleOutsideClick;
}
