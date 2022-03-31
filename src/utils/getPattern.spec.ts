import { test } from 'uvu';
import assert from 'assert/strict';
import { getPattern } from './getPattern';

test('getPattern should produce correct result', () => {
  assert.equal(getPattern(), undefined);
  assert.equal(getPattern(''), '');
  assert.equal(getPattern('^[a-zA-Z]'), '^[a-zA-Z]');
  assert.equal(getPattern('^\\w+$'), '^\\\\w+$');
  assert.equal(getPattern('^\\d{3}-\\d{2}-\\d{4}$'), '^\\\\d{3}-\\\\d{2}-\\\\d{4}$');
  assert.equal(getPattern('\\'), '\\\\');
  assert.equal(getPattern('\\/'), '\\\\/');
  assert.equal(getPattern('\\/\\/'), '\\\\/\\\\/');
});

test.run();
