import {TakeAction} from './enums';

/**
 * iterate the generator
 */
export const iterate = <T>(
    iterator: IterableIterator<T>,
    fn: (value: T, index: number) => void | boolean | TakeAction,
    ) => {

  let counter = 0;
  let is_continue = true;
  let result = iterator.next();

  while (is_continue && !result.done) {

    const action = fn(result.value, counter++);

    switch (action) {
      case false:
      case TakeAction.Break:
      case TakeAction.TakeAndBreak:
        is_continue = false;
        break;

      default:
        is_continue = true;
        break;
    }

    if (is_continue) {
      result = iterator.next();
    }
  }
};
