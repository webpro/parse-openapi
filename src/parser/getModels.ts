import type { Model } from '../types';
import type { OpenApi } from '../OpenApi';
import { getModel } from './getModel';
import { getType } from './getType';

export const getModels = (openApi: OpenApi): Model[] => {
  const models: Model[] = [];
  if (openApi.components) {
    for (const definitionName in openApi.components.schemas) {
      if (openApi.components.schemas.hasOwnProperty(definitionName)) {
        const definition = openApi.components.schemas[definitionName];
        const definitionType = getType(definitionName);
        const model = getModel(openApi, definition, true, definitionType.base);
        models.push(model);
      }
    }
  }
  return models;
};
