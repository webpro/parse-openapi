import { test } from 'uvu';
import assert from 'assert/strict';
import { getOperationName } from './getOperationName';

test('getOperationName should produce correct result', () => {
  assert.equal(getOperationName('/api/v{api-version}/users', 'GET', 'GetAllUsers'), 'getAllUsers');
  assert.equal(getOperationName('/api/v{api-version}/users', 'GET', undefined), 'getApiUsers');
  assert.equal(getOperationName('/api/v{api-version}/users', 'POST', undefined), 'postApiUsers');
  assert.equal(getOperationName('/api/v1/users', 'GET', 'GetAllUsers'), 'getAllUsers');
  assert.equal(getOperationName('/api/v1/users', 'GET', undefined), 'getApiV1Users');
  assert.equal(getOperationName('/api/v1/users', 'POST', undefined), 'postApiV1Users');
  assert.equal(getOperationName('/api/v1/users/{id}', 'GET', undefined), 'getApiV1Users');
  assert.equal(getOperationName('/api/v1/users/{id}', 'POST', undefined), 'postApiV1Users');
  assert.equal(getOperationName('/api/v{api-version}/users', 'GET', 'fooBar'), 'fooBar');
  assert.equal(getOperationName('/api/v{api-version}/users', 'GET', 'FooBar'), 'fooBar');
  assert.equal(getOperationName('/api/v{api-version}/users', 'GET', 'Foo Bar'), 'fooBar');
  assert.equal(getOperationName('/api/v{api-version}/users', 'GET', 'foo bar'), 'fooBar');
  assert.equal(getOperationName('/api/v{api-version}/users', 'GET', 'foo-bar'), 'fooBar');
  assert.equal(getOperationName('/api/v{api-version}/users', 'GET', 'foo_bar'), 'fooBar');
  assert.equal(getOperationName('/api/v{api-version}/users', 'GET', 'foo.bar'), 'fooBar');
  assert.equal(getOperationName('/api/v{api-version}/users', 'GET', '@foo.bar'), 'fooBar');
  assert.equal(getOperationName('/api/v{api-version}/users', 'GET', '$foo.bar'), 'fooBar');
  assert.equal(getOperationName('/api/v{api-version}/users', 'GET', '_foo.bar'), 'fooBar');
  assert.equal(getOperationName('/api/v{api-version}/users', 'GET', '-foo.bar'), 'fooBar');
  assert.equal(getOperationName('/api/v{api-version}/users', 'GET', '123.foo.bar'), 'fooBar');
});

test.run();
