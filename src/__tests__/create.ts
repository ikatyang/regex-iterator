import {create} from '../create';

let regex: RegExp;
let global_regex: RegExp;
const str = '123 456 789';

beforeEach(() => {
  regex = /[0-9]+/;
  global_regex = /[0-9]+/g;
});

it('should clone the regex to exec', () => {
  const generator = create(global_regex, str);

  const pre_last_index = global_regex.lastIndex;
  generator.next();
  const post_last_index = global_regex.lastIndex;

  expect(pre_last_index).toBe(post_last_index);
});

it('should return correctly with global regex', () => {
  const generator = create(global_regex, str);
  expect([...generator]).toMatchSnapshot();
});

it('should return correctly without global regex', () => {
  const generator = create(regex, str);
  expect([...generator]).toMatchSnapshot();
});

it('should return correctly with max_result', () => {
  const max_result = 2;
  const generator = create(global_regex, str, max_result);
  expect([...generator].length).toBe(max_result);
});
