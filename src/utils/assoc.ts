import AssocObj from '../interfaces/AssocObj';

function assoc<K extends string, V>(
  key: K,
  value: V
): <O extends object>(obj: O) => AssocObj<K, V, O> {
  return <O extends object>(obj: O): AssocObj<K, V, O> => {
    return { ...obj, [key]: value } as AssocObj<K, V, O>;
  };
}

export default assoc;
