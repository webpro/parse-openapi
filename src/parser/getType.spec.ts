import { test } from 'uvu';
import assert from 'assert/strict';
import { getType } from './getType';

test('getType should convert int', () => {
  const type = getType('int');
  assert.deepEqual(type.type, 'number');
  assert.deepEqual(type.base, 'number');
  assert.deepEqual(type.template, null);
  assert.deepEqual(type.imports, []);
  assert.deepEqual(type.isNullable, false);
});

test('getType should convert string', () => {
  const type = getType('string');
  assert.deepEqual(type.type, 'string');
  assert.deepEqual(type.base, 'string');
  assert.deepEqual(type.template, null);
  assert.deepEqual(type.imports, []);
  assert.deepEqual(type.isNullable, false);
});

test('getType should convert string array', () => {
  const type = getType('array[string]');
  assert.deepEqual(type.type, 'string[]');
  assert.deepEqual(type.base, 'string');
  assert.deepEqual(type.template, null);
  assert.deepEqual(type.imports, []);
  assert.deepEqual(type.isNullable, false);
});

test('getType should convert template with primary', () => {
  const type = getType('#/components/schemas/Link[string]');
  assert.deepEqual(type.type, 'Link<string>');
  assert.deepEqual(type.base, 'Link');
  assert.deepEqual(type.template, 'string');
  assert.deepEqual(type.imports, ['Link']);
  assert.deepEqual(type.isNullable, false);
});

test('getType should convert template with model', () => {
  const type = getType('#/components/schemas/Link[Model]');
  assert.deepEqual(type.type, 'Link<Model>');
  assert.deepEqual(type.base, 'Link');
  assert.deepEqual(type.template, 'Model');
  assert.deepEqual(type.imports, ['Link', 'Model']);
  assert.deepEqual(type.isNullable, false);
});

test('getType should have double imports', () => {
  const type = getType('#/components/schemas/Link[Link]');
  assert.deepEqual(type.type, 'Link<Link>');
  assert.deepEqual(type.base, 'Link');
  assert.deepEqual(type.template, 'Link');
  assert.deepEqual(type.imports, ['Link', 'Link']);
  assert.deepEqual(type.isNullable, false);
});

test('getType should support dot', () => {
  const type = getType('#/components/schemas/model.000');
  assert.deepEqual(type.type, 'model_000');
  assert.deepEqual(type.base, 'model_000');
  assert.deepEqual(type.template, null);
  assert.deepEqual(type.imports, ['model_000']);
  assert.deepEqual(type.isNullable, false);
});

test('getType should support dashes', () => {
  const type = getType('#/components/schemas/some_special-schema');
  assert.deepEqual(type.type, 'some_special_schema');
  assert.deepEqual(type.base, 'some_special_schema');
  assert.deepEqual(type.template, null);
  assert.deepEqual(type.imports, ['some_special_schema']);
  assert.deepEqual(type.isNullable, false);
});

test('getType should support dollar sign', () => {
  const type = getType('#/components/schemas/$some+special+schema');
  assert.deepEqual(type.type, '$some_special_schema');
  assert.deepEqual(type.base, '$some_special_schema');
  assert.deepEqual(type.template, null);
  assert.deepEqual(type.imports, ['$some_special_schema']);
  assert.deepEqual(type.isNullable, false);
});

test('getType should support multiple base types', () => {
  const type = getType(['string', 'int']);
  assert.deepEqual(type.type, 'string | number');
  assert.deepEqual(type.base, 'string | number');
  assert.deepEqual(type.template, null);
  assert.deepEqual(type.imports, []);
  assert.deepEqual(type.isNullable, false);
});

test('getType should support multiple nullable types', () => {
  const type = getType(['string', 'null']);
  assert.deepEqual(type.type, 'string');
  assert.deepEqual(type.base, 'string');
  assert.deepEqual(type.template, null);
  assert.deepEqual(type.imports, []);
  assert.deepEqual(type.isNullable, true);
});

test.run();
