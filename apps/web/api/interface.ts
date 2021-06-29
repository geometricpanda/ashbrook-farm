import ApiSearchResponse from '@prismicio/client/types/ApiSearchResponse';
import { Document } from '@prismicio/client/types/documents';

export enum ContentType {
  Breed = 'breed',
}

export interface Breed {
  name: string;
  intro: string;
  content: string;
}

export interface ApiDocument<T> extends Document {
  data: T;
}

export interface ApiResponse<T> extends Omit<ApiSearchResponse, 'results'> {
  results: Array<ApiDocument<T>>;
}
