import { GetStaticPaths, GetStaticProps } from 'next';
import { ApiResponse, Breed, getBreeds } from '../../../api';
import Head from 'next/head';
import { FC } from 'react';
import { Icon } from '@iconify/react';
import baselineChevronRight from '@iconify/icons-ic/baseline-chevron-right';
import baselineChevronLeft from '@iconify/icons-ic/baseline-chevron-left';

import { ButtonGroup, ButtonLink, H1, Section, Tile } from '@ashbrook-farm/web-components';
import { getBreedPath, getBreedsPagination } from '../../../helpers';


interface BreedsProps {
  data: ApiResponse<Breed>;
}

export const getStaticProps: GetStaticProps<BreedsProps> = async ({ params }) => {
  const { page } = params;
  const data = await getBreeds({ page: +page, pageSize: 3 });

  return {
    revalidate: 60,
    props: {
      data
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getBreeds({});
  const { total_pages } = data;

  const paths = [...Array(+total_pages).keys()]
    .map((_, index) => getBreedsPagination(index + 1));

  return {
    paths,
    fallback: 'blocking'
  };
};

export const Pagination: FC<BreedsProps> = ({ data }) => {
  const { results, page, total_pages } = data;
  const nextPage = page + 1;
  const prevPage = page - 1;
  const showPrev = prevPage > 0;
  const showNext = nextPage <= total_pages;

  const NextButton = () => (
    <ButtonLink
      href={getBreedsPagination(nextPage)}
      aria-label={`Go to Page ${nextPage} of ${total_pages}`}
      secondary
      icon>
      <Icon icon={baselineChevronRight} width={'100%'} height={'100%'} />
    </ButtonLink>
  );

  const PreviousButton = () => (
    <ButtonLink
      href={getBreedsPagination(prevPage)}
      aria-label={`Go to Page ${prevPage} of ${total_pages}`}
      secondary
      icon>
      <Icon icon={baselineChevronLeft} width={'100%'} height={'100%'} />
    </ButtonLink>
  );


  return (
    <>
      <Head>
        <title>Our Breeds - Page {page} of {total_pages} - Ashbrook Farm</title>
      </Head>

      <Section header={(<H1>Our Birds - Page {page} of {total_pages}</H1>)}
               footer={(
                 <ButtonGroup>
                   {showPrev && <PreviousButton />}
                   {showNext && <NextButton />}
                 </ButtonGroup>
               )}>

        {results
          .map((result, index) => (
            <Tile
              aboveFold={index < 3}
              imgUrl={result.data.preview_image.url}
              imgAlt={result.data.preview_image.alt}
              imgDimensions={result.data.preview_image.dimensions}
              key={result.uid}
              title={result.data.name}
              href={getBreedPath(result)}
              content={result.data.intro}
              hrefText='Find Out More'
            />
          ))}
      </Section>
    </>
  );
};

export default Pagination;
