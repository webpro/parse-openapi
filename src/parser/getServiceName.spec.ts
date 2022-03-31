import { test } from 'uvu';
import assert from 'assert/strict';
import { getServiceName } from './getServiceName';

test('getServiceName should produce correct result', () => {
  assert.equal(getServiceName(''), '');
  assert.equal(getServiceName('FooBar'), 'FooBar');
  assert.equal(getServiceName('Foo Bar'), 'FooBar');
  assert.equal(getServiceName('foo bar'), 'FooBar');
  assert.equal(getServiceName('@fooBar'), 'FooBar');
  assert.equal(getServiceName('$fooBar'), 'FooBar');
  assert.equal(getServiceName('123fooBar'), 'FooBar');
});

test.run();
