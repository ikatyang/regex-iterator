/**
 * create a generator for string matching
 */
export function* create(regex: RegExp, str: string, max_result = Infinity) {
  const cloned_regex = new RegExp(regex.source, regex.flags);

  let counter = 0;
  let result = cloned_regex.exec(str);

  while (counter < max_result && result !== null) {
    counter++;

    yield result;

    if (!regex.global) {
      break;
    }

    result = cloned_regex.exec(str);
  }
}
