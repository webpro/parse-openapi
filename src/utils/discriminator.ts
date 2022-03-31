import type { Model, Dictionary } from '../types';
import type { OpenApi, OpenApiDiscriminator, OpenApiSchema } from '../OpenApi';
import { stripNamespace } from '../parser/stripNamespace';

const inverseDictionary = (map: Dictionary<string>): Dictionary<string> => {
  const m2: Dictionary<string> = {};
  for (const key in map) {
    m2[map[key]] = key;
  }
  return m2;
};

export const findOneOfParentDiscriminator = (openApi: OpenApi, parent?: Model): OpenApiDiscriminator | undefined => {
  if (openApi.components && parent) {
    for (const definitionName in openApi.components.schemas) {
      if (openApi.components.schemas.hasOwnProperty(definitionName)) {
        const schema: OpenApiSchema = openApi.components.schemas[definitionName];
        if (
          schema.discriminator &&
          schema.oneOf?.length &&
          schema.oneOf.some(
            (definition: OpenApiSchema) => definition.$ref && stripNamespace(definition.$ref) == parent.name
          )
        ) {
          return schema.discriminator;
        }
      }
    }
  }
  return;
};

export const mapPropertyValue = (discriminator: OpenApiDiscriminator, parent: Model): string => {
  if (discriminator.mapping) {
    const mapping = inverseDictionary(discriminator.mapping);
    const key = Object.keys(mapping).find(item => stripNamespace(item) == parent.name);
    if (key && mapping[key]) {
      return mapping[key];
    }
  }
  return parent.name;
};
