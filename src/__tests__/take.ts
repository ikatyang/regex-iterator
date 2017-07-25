import { create } from '../create';
import { TakeAction } from '../enums';
import { take } from '../take';

const test_return_value = (return_value: any, expected_count: number) => {
  const iterator = create(/[0-9]+/g, '123 456 789');
  const values = take(iterator, () => return_value);
  expect(values.length).toBe(expected_count);
};

it('should take correctly', () => {
  test_return_value(false, 0);
  test_return_value(undefined, 0);
  test_return_value(TakeAction.Break, 0);

  test_return_value(TakeAction.TakeAndBreak, 1);

  test_return_value(true, 3);
  test_return_value(TakeAction.TakeAndContinue, 3);
});

it('should take transformed correctly', () => {
  const iterator = create(/[0-9]+/g, '123 456 789');
  const values = take(
    iterator,
    () => true,
    (value, index) => `${index}:${value[0]}`,
  );
  expect(values).toMatchSnapshot();
});
