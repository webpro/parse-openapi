import { getModels } from './parser/getModels';
import { getServer } from './parser/getServer';
import { getServices } from './parser/getServices';
import { getServiceVersion } from './parser/getServiceVersion';
import type { OpenApi } from './OpenApi';
import type { ParsedSpecification } from './types';

export const parse = (openApi: OpenApi): ParsedSpecification => {
  const version = getServiceVersion(openApi.info.version);
  const server = getServer(openApi);
  const models = getModels(openApi);
  const services = getServices(openApi);

  return { version, server, models, services };
};
