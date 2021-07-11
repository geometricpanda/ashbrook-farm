import ApiSearchResponse from '@prismicio/client/types/ApiSearchResponse';
import { Document } from '@prismicio/client/types/documents';

export enum ContentType {
  Breed = 'breed',
}

export interface Breed {
  name: string;
  intro: string;
  content: string;
  preview_image: {
    alt: string;
    copyright: string;
    dimensions: {
      width: number;
      height: number;
    };
    url: string;
  };
}

export interface ApiDocument<T> extends Document {
  data: T;
}

export interface ApiResponse<T> extends Omit<ApiSearchResponse, 'results'> {
  results: Array<ApiDocument<T>>;
}

export interface Page {
  meta_description: string;
  hero: {
    alt: string;
    copyright: string;
    dimensions: {
      width: number;
      height: number;
    };
    url: string;
  };
  title: string;
  content: string;
  breeds: Array<{ breed: Document }>;
}
