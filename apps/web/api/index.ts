import Prismic from '@prismicio/client';
import PrismicDom from 'prismic-dom';
import { ApiDocument, ApiResponse, Breed } from './interface';

const getApi = () =>
  Prismic.client('https://ashbrook-farm.cdn.prismic.io/api/v2');

export const getBreeds = async ({ pageSize = 10, page = 1 }): Promise<ApiResponse<Breed>> => {
  const api = await getApi();
  const response = await api.query(
    Prismic.Predicates.at('document.type', 'breed'),
    { pageSize, page }
  );

  return response
    ? {
      ...response,
      results: response.results.map((result) => ({
        ...result,
        data: {
          ...result.data,
          intro: PrismicDom.RichText.asHtml(result.data.intro),
          content: PrismicDom.RichText.asHtml(result.data.content)
        }
      }))
    }
    : null;
};

export const getBreed = async (uid: string): Promise<ApiDocument<Breed>> => {
  const api = await getApi();
  const response = await api.query([
    Prismic.Predicates.at('document.type', 'breed'),
    Prismic.Predicates.at('my.breed.uid', uid)
  ]);

  return response && response.results_size > 0
    ? {
      ...response.results[0],
      data: {
        ...response.results[0].data,
        intro: PrismicDom.RichText.asHtml(response.results[0].data.intro),
        content: PrismicDom.RichText.asHtml(response.results[0].data.content)
      }
    }
    : null;
};

export * from './interface';
