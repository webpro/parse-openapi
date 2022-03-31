import { test } from 'uvu';
import assert from 'assert/strict';
import { stripNamespace } from './stripNamespace';

test('stripNamespace should strip namespace', () => {
  assert.equal(stripNamespace('#/components/schemas/Item'), 'Item');
  assert.equal(stripNamespace('#/components/responses/Item'), 'Item');
  assert.equal(stripNamespace('#/components/parameters/Item'), 'Item');
  assert.equal(stripNamespace('#/components/examples/Item'), 'Item');
  assert.equal(stripNamespace('#/components/requestBodies/Item'), 'Item');
  assert.equal(stripNamespace('#/components/headers/Item'), 'Item');
  assert.equal(stripNamespace('#/components/securitySchemes/Item'), 'Item');
  assert.equal(stripNamespace('#/components/links/Item'), 'Item');
  assert.equal(stripNamespace('#/components/callbacks/Item'), 'Item');
});

test.run();
