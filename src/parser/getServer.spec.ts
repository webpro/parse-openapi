import { test } from 'uvu';
import assert from 'assert/strict';
import { getServer } from './getServer';

test('getServer should produce correct result', () => {
  assert.deepEqual(
    getServer({
      openapi: '3.0',
      info: {
        title: 'dummy',
        version: '1.0',
      },
      paths: {},
      servers: [
        {
          url: 'https://localhost:8080/api',
        },
      ],
    }),
    'https://localhost:8080/api'
  );
});

test('getServer should produce correct result with variables', () => {
  assert.deepEqual(
    getServer({
      openapi: '3.0',
      info: {
        title: 'dummy',
        version: '1.0',
      },
      paths: {},
      servers: [
        {
          url: '{scheme}://localhost:{port}/api',
          variables: {
            scheme: {
              default: 'https',
            },
            port: {
              default: '8080',
            },
          },
        },
      ],
    }),
    'https://localhost:8080/api'
  );
});

test.run();
