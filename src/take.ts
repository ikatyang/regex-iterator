import {TakeAction} from './enums';
import {iterate} from './iterate';

/**
 * take items in the generator
 */
export const take = <T, U = T>(
    iterator: IterableIterator<T>,
    pred: (value: T) => void | boolean | TakeAction,
    fn: (value: T, index: number, values: U[]) => U = (x: T) => x as any as U,
    ): U[] => {
  const values: U[] = [];

  iterate(iterator, (value, index) => {
    const action = pred(value);

    switch (action) {

      case true:
      case TakeAction.TakeAndBreak:
      case TakeAction.TakeAndContinue:
        values.push(fn(value, index, values));
        break;

      default:
        // do nothing
        break;
    }

    return action;
  });

  return values;
};
