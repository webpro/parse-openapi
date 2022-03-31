import { test } from 'uvu';
import assert from 'assert/strict';
import { getServices } from './getServices';

test('getServices should create a unnamed service if tags are empty', () => {
  const services = getServices({
    openapi: '3.0.0',
    info: {
      title: 'x',
      version: '1',
    },
    paths: {
      '/api/trips': {
        get: {
          tags: [],
          responses: {
            200: {
              description: 'x',
            },
            default: {
              description: 'default',
            },
          },
        },
      },
    },
  });

  assert.equal(services.length, 1);
  assert.equal(services[0].name, 'Default');
});

test.run();
