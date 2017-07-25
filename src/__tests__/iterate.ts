import { create } from '../create';
import { TakeAction } from '../enums';
import { iterate } from '../iterate';

const test_return_value = (return_value: any, expected_count: number) => {
  let counter = 0;
  const iterator = create(/[0-9]+/g, '123 456 789');
  iterate(iterator, () => {
    counter++;
    return return_value;
  });
  expect(counter).toBe(expected_count);
};

it('should iterate correctly', () => {
  test_return_value(false, 1);
  test_return_value(TakeAction.Break, 1);
  test_return_value(TakeAction.TakeAndBreak, 1);

  test_return_value(true, 3);
  test_return_value(undefined, 3);
  test_return_value(TakeAction.TakeAndContinue, 3);
});
