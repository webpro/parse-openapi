import { test } from 'uvu';
import assert from 'assert/strict';
import { getOperationParameterName } from './getOperationParameterName';

test('getOperationParameterName should produce correct result', () => {
  assert.equal(getOperationParameterName(''), '');
  assert.equal(getOperationParameterName('foobar'), 'foobar');
  assert.equal(getOperationParameterName('fooBar'), 'fooBar');
  assert.equal(getOperationParameterName('foo_bar'), 'fooBar');
  assert.equal(getOperationParameterName('foo-bar'), 'fooBar');
  assert.equal(getOperationParameterName('foo.bar'), 'fooBar');
  assert.equal(getOperationParameterName('@foo.bar'), 'fooBar');
  assert.equal(getOperationParameterName('$foo.bar'), 'fooBar');
  assert.equal(getOperationParameterName('123.foo.bar'), 'fooBar');
  assert.equal(getOperationParameterName('Foo-Bar'), 'fooBar');
  assert.equal(getOperationParameterName('FOO-BAR'), 'fooBar');
});

test.run();
