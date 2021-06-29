import { ApiDocument, Breed } from '../api';

export const getBreedPath = (doc: ApiDocument<Breed>): string =>
  `/breeds/${doc.uid}`;
