import type { OpenAPIV3 } from 'openapi-types';

// Named exports to match original code
export type OpenApi = OpenAPIV3.Document;
export type OpenApiRequestBody = OpenAPIV3.RequestBodyObject | OpenAPIV3.OpenApiReference;
export type OpenApiResponse = OpenAPIV3.ResponseObject | OpenAPIV3.OpenApiReference;
export type OpenApiResponses = OpenAPIV3.ResponsesObject;
export type OpenApiMediaType = OpenAPIV3.MediaTypeObject;
export type OpenApiSchema = OpenAPIV3.SchemaObject | OpenAPIV3.OpenApiReference;
export type OpenApiParameter = OpenAPIV3.ParameterObject | OpenAPIV3.OpenApiReference;
export type OpenApiReference = OpenAPIV3.ReferenceObject;
export type OpenApiDiscriminator = OpenAPIV3.DiscriminatorObject;
export type OpenApiOperation = OpenAPIV3.OperationObject;
