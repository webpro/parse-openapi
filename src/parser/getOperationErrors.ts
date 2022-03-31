import type { OperationError, OperationResponse } from '../types';

export const getOperationErrors = (operationResponses: OperationResponse[]): OperationError[] => {
  return operationResponses
    .filter(operationResponse => {
      return operationResponse.code >= 300 && operationResponse.description;
    })
    .map(response => ({
      code: response.code,
      description: response.description!,
    }));
};
