import { test } from 'uvu';
import assert from 'assert/strict';
import { getOperationResponseCode } from './getOperationResponseCode';

test('getOperationResponseCode should produce correct result', () => {
  assert.equal(getOperationResponseCode(''), null);
  assert.equal(getOperationResponseCode('default'), 200);
  assert.equal(getOperationResponseCode('200'), 200);
  assert.equal(getOperationResponseCode('300'), 300);
  assert.equal(getOperationResponseCode('400'), 400);
  assert.equal(getOperationResponseCode('abc'), null);
  assert.equal(getOperationResponseCode('-100'), 100);
});

test.run();
