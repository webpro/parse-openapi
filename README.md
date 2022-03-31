# parse-openapi

The OpenAPi v3 parser extracted from
[openapi-typescript-codegen](https://github.com/ferdikoomen/openapi-typescript-codegen).
So first of all, all credits go to
[Ferdi Koomen](https://github.com/ferdikoomen) for his work on this great
library. Only the parser is needed to render the models, services and hooks with
custom templates, hence this stripped down version.

## Installation

    npm install -D parse-openapi openapi-types

## API

```typescript
import { readFile, writeFile } from 'fs/promises';
import { parse } from 'parse-openapi';
import { renderModel, renderService } from './templates';
import type { OpenAPIV3 } from 'openapi-types';

const specs: OpenAPIV3 = JSON.parse(await readFile('swagger.json', 'utf8'));

const { version, server, models, services } = parse(specs);

models.forEach(model => writeFile(`${model.name}.ts`, renderModel(model)));
services.forEach(service =>
  writeFile(`${service.name}.ts`, renderService(service))
);
```

## Example render function

This could be anything from Handlebars templates to template literals. Here's a
minimal example:

```typescript
import type { Operation, Service } from 'parse-openapi';

const renderOperation = (operation: Operation): string => {
  const [result] = operation.results;
  return `
/**
 * ${operation.summary}
 * ${operation.description}
 * @returns ${result.type} ${result.description}
 ${operation.deprecated ? '* @deprecated' : ''}
 */
export function ${operation.name}([...]): Promise<${result.type}> {
  return request({
    method: '${operation.method}',
    path: \`${operation.path}\`,
    [...]
  });
}`;
};

export default (service: Service) => {
  return services.operations.map(renderOperation).join(';');
};
```
