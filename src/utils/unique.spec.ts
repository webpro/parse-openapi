import { test } from 'uvu';
import assert from 'assert/strict';
import { unique } from './unique';

test('unique should return correct index', () => {
  assert.ok(unique('a', 0, ['a', 'b', 'c']));
  assert.equal(unique('a', 1, ['a', 'b', 'c']), false);
  assert.equal(unique('a', 2, ['a', 'b', 'c']), false);
  assert.ok(unique('a', 0, ['a', 'b', 'c']));
  assert.ok(unique('a', 1, ['z', 'a', 'b']));
  assert.ok(unique('a', 2, ['y', 'z', 'a']));
});

test.run();
