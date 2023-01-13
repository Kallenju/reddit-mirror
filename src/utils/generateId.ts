import AssocObj from '../interfaces/AssocObj';
import assoc from './assoc';
import generateRandomString from './generateRandomString';

function generateId<O extends object>(obj: O): AssocObj<'id', string, O> {
  return assoc('id', generateRandomString())(obj);
}

export default generateId;
