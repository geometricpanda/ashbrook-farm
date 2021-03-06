import { ApiDocument, Breed } from '../api';

export const getBreedPath = (doc: ApiDocument<Breed>): string =>
  `/breed/${doc.uid}`;

export const getBreedsPath = (): string => `/breeds`;

export const getBreedsPagination = (page: number): string => `/breeds/${page}`;

export const getEggClubPath = (): string => `/egg-club`;
