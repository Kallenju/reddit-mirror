import { useState, useEffect } from 'react';

export default function useIsMounted(): [boolean] {
  const [isMounted, setIsMounted]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState<boolean>(false);

  useEffect((): void => {
    setIsMounted(true);
  }, []);

  return [isMounted];
}
