import { test } from 'uvu';
import assert from 'assert/strict';
import { getMappedType } from './getMappedType';

test('getMappedType should map types to the basics', () => {
  assert.equal(getMappedType('file'), 'binary');
  assert.equal(getMappedType('string'), 'string');
  assert.equal(getMappedType('date'), 'string');
  assert.equal(getMappedType('date-time'), 'string');
  assert.equal(getMappedType('float'), 'number');
  assert.equal(getMappedType('double'), 'number');
  assert.equal(getMappedType('short'), 'number');
  assert.equal(getMappedType('int'), 'number');
  assert.equal(getMappedType('boolean'), 'boolean');
  assert.equal(getMappedType('any'), 'any');
  assert.equal(getMappedType('object'), 'any');
  assert.equal(getMappedType('void'), 'void');
  assert.equal(getMappedType('null'), 'null');
  assert.equal(getMappedType('unknown'), undefined);
  assert.equal(getMappedType(''), undefined);
});

test.run();
