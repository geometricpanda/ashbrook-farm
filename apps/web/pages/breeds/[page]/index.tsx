import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { FC } from 'react';
import baselineChevronRight from '@iconify/icons-ic/baseline-chevron-right';
import baselineChevronLeft from '@iconify/icons-ic/baseline-chevron-left';

import {
  ButtonGroup,
  ButtonLink,
  H1,
  H2,
  Hero,
  Section,
  Tile,
} from '@ashbrook-farm/web-components';

import {
  ApiDocument,
  ApiResponse,
  Breed,
  getBreeds,
  getPage,
  Page,
} from '../../../api';
import { getBreedPath, getBreedsPagination } from '../../../helpers';

interface BreedsProps {
  data: ApiResponse<Breed>;
  page: ApiDocument<Page>;
}

export const getStaticProps: GetStaticProps<BreedsProps> = async ({
  params,
}) => {
  const { page: pageNumber } = params;
  const data = await getBreeds({ page: +pageNumber, pageSize: 3 });
  const page = await getPage('breeds');

  return {
    revalidate: 60,
    props: {
      data,
      page,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getBreeds({});
  const { total_pages } = data;

  const paths = [...Array(+total_pages).keys()].map((_, index) =>
    getBreedsPagination(index + 1)
  );

  return {
    paths,
    fallback: 'blocking',
  };
};

export const Pagination: FC<BreedsProps> = ({ data, page }) => {
  const { results, page: pageNumber, total_pages } = data;
  const nextPage = pageNumber + 1;
  const prevPage = pageNumber - 1;
  const showPrev = prevPage > 0;
  const showNext = nextPage <= total_pages;

  const NextButton = () => (
    <ButtonLink
      href={getBreedsPagination(nextPage)}
      aria-label={`Go to Page ${nextPage} of ${total_pages}`}
      icon={baselineChevronRight}
      reverse
      secondary
    >
      Next
    </ButtonLink>
  );

  const PreviousButton = () => (
    <ButtonLink
      href={getBreedsPagination(prevPage)}
      aria-label={`Go to Page ${prevPage} of ${total_pages}`}
      icon={baselineChevronLeft}
      secondary
    >
      Back
    </ButtonLink>
  );

  return (
    <>
      <Head>
        <title>
          {page.data.title} - Page {pageNumber} of {total_pages} - Ashbrook Farm
        </title>
        <meta name="description" content={page.data.meta_description} />
      </Head>

      <Hero image={page.data.hero} />

      <Section
        header={
          <>
            <H1 marginBottom>Our Birds </H1>
            <H2 marginBottom>
              Page {pageNumber} of {total_pages}
            </H2>
          </>
        }
        footer={
          <ButtonGroup>
            {showPrev && <PreviousButton />}
            {showNext && <NextButton />}
          </ButtonGroup>
        }
      >
        {results.map((result, index) => (
          <Tile
            imgUrl={result.data.preview_image.url}
            imgAlt={result.data.preview_image.alt}
            imgDimensions={result.data.preview_image.dimensions}
            key={result.uid}
            title={result.data.name}
            href={getBreedPath(result)}
            content={result.data.intro}
            hrefText="Find Out More"
          />
        ))}
      </Section>
    </>
  );
};

export default Pagination;
