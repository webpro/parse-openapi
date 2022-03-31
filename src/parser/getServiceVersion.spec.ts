import { test } from 'uvu';
import assert from 'assert/strict';
import { getServiceVersion } from './getServiceVersion';

test('getServiceVersion should produce correct result', () => {
  assert.equal(getServiceVersion('1.0'), '1.0');
  assert.equal(getServiceVersion('v1.0'), '1.0');
  assert.equal(getServiceVersion('V1.0'), '1.0');
});

test.run();
