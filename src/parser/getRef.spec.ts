import { test } from 'uvu';
import assert from 'assert/strict';
import { getRef } from './getRef';

test('getRef should produce correct result', () => {
  assert.deepEqual(
    getRef(
      {
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
        components: {
          schemas: {
            Example: {
              description: 'This is an Example model ',
              type: 'integer',
            },
          },
        },
      },
      {
        $ref: '#/components/schemas/Example',
      }
    ),
    {
      description: 'This is an Example model ',
      type: 'integer',
    }
  );
});

test('getRef should produce correct result for encoded ref path', () => {
  assert.deepEqual(
    getRef(
      {
        openapi: '3.0',
        info: {
          title: 'dummy',
          version: '1.0',
        },
        paths: {
          '/api/user/{id}': {
            description: 'This is an Example path',
          },
        },
      },
      {
        $ref: '#/paths/~1api~1user~1%7Bid%7D',
      }
    ),
    {
      description: 'This is an Example path',
    }
  );
});

test.run();
