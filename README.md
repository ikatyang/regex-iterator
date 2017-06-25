# regex-iterator

[![npm](https://img.shields.io/npm/v/regex-iterator.svg)](https://www.npmjs.com/package/regex-iterator)
[![build](https://img.shields.io/travis/ikatyang/regex-iterator/master.svg)](https://travis-ci.org/ikatyang/regex-iterator/builds)
[![coverage](https://img.shields.io/codecov/c/github/ikatyang/regex-iterator.svg)](https://codecov.io/gh/ikatyang/regex-iterator)

string matching iterator using regular expression

[Changelog](https://github.com/ikatyang/regex-iterator/blob/master/CHANGELOG.md)

## Install

```sh
# using npm
npm install --save regex-iterator

# using yarn
yarn add regex-iterator
```

## Usage

```ts
import * as regex_iterator from 'regex-iterator';

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
```

## Development

```sh
# lint
yarn run lint

# build
yarn run build

# test
yarn run test
```

## License

MIT © [Ika](https://github.com/ikatyang)
