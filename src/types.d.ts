declare function parse(spec: unknown): ParsedSpecification;

export interface ParsedSpecification {
  version: string;
  server: string;
  models: Model[];
  services: Service[];
}

export interface Dictionary<T = any> {
  [key: string]: T;
}

export interface Enum {
  name: string;
  value: string;
  type: string;
  description: string | null;
}

export interface Model extends Schema {
  name: string;
  export: 'reference' | 'generic' | 'enum' | 'array' | 'dictionary' | 'interface' | 'one-of' | 'any-of' | 'all-of';
  type: string;
  base: string;
  template: string | null;
  link: Model | null;
  description: string | null;
  default?: string;
  imports: string[];
  enum: Enum[];
  enums: Model[];
  properties: Model[];
}

export interface ModelComposition {
  type: 'one-of' | 'any-of' | 'all-of';
  imports: string[];
  enums: Model[];
  properties: Model[];
}

export interface Operation extends OperationParameters {
  service: string;
  name: string;
  summary: string | null;
  description: string | null;
  deprecated: boolean;
  method: string;
  path: string;
  errors: OperationError[];
  results: OperationResponse[];
  responseHeader: string | null;
}

export interface OperationError {
  code: number;
  description: string;
}

export interface OperationParameter extends Model {
  in: string; // DIFF
  prop: string;
  mediaType: string | null;
}

export interface OperationParameters {
  imports: string[];
  parameters: OperationParameter[];
  parametersPath: OperationParameter[];
  parametersQuery: OperationParameter[];
  parametersForm: OperationParameter[];
  parametersCookie: OperationParameter[];
  parametersHeader: OperationParameter[];
  parametersBody: OperationParameter | null;
}

export interface OperationResponse extends Model {
  in: 'response' | 'header';
  code: number;
}

export interface Schema {
  isDefinition: boolean;
  isReadOnly: boolean;
  isRequired: boolean;
  isNullable: boolean;
  format?:
    | 'int32'
    | 'int64'
    | 'float'
    | 'double'
    | 'string'
    | 'boolean'
    | 'byte'
    | 'binary'
    | 'date'
    | 'date-time'
    | 'password';
  maximum?: number;
  exclusiveMaximum?: boolean;
  minimum?: number;
  exclusiveMinimum?: boolean;
  multipleOf?: number;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  maxProperties?: number;
  minProperties?: number;
}

export interface Service {
  name: string;
  operations: Operation[];
  imports: string[];
}

export interface Type {
  type: string;
  base: string;
  template: string | null;
  imports: string[];
  isNullable: boolean;
}
