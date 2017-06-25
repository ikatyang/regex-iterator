import * as regex_iterator from '../src/index';

// tslint:disable:comment-format

const spread_sample = () => {
  const iterator = regex_iterator.create(/([0-9])([a-z])/g, '1a 2b 3c');
  return [...iterator]; //=> [['1a', '1', 'a'], ['2b', '2', 'b'], ['3c', '3', 'c']]
};

const take_sample = () => {
  const iterator = regex_iterator.create(/([0-9])([a-z])/g, '1a 2b 3c');
  return regex_iterator.take(
    iterator,
    match => match[2] !== 'c',
    match => `${match[1]}-${match[2]}`,
  ); //=> ['1-a', '2-b']
};

it('should spread correctly', () => {
  expect(spread_sample()).toMatchSnapshot();
});

it('should take correctly', () => {
  expect(take_sample()).toMatchSnapshot();
});
