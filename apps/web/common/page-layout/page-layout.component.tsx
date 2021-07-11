import Head from 'next/head';
import {
  ButtonGroup,
  ButtonLink,
  FreeText,
  H1,
  Hero,
  Section,
  Tile,
} from '@ashbrook-farm/web-components';
import { getBreedPath, getBreedsPagination } from '../../helpers';
import { ApiDocument, Breed, Page } from '../../api';
import { FC } from 'react';

export interface PageLayoutProps {
  page: ApiDocument<Page>;
  breeds?: Array<ApiDocument<Breed>>;
}

export const PageLayout: FC<PageLayoutProps> = ({ page, breeds }) => {
  return (
    <>
      <Head>
        <title>{page.data.title} - Ashbrook Farm</title>
        <meta name="description" content={page.data.meta_description} />
      </Head>
      <Hero image={page.data.hero} />
      <Section header={<H1>{page.data.title}</H1>}>
        <FreeText dangerouslySetInnerHTML={{ __html: page.data.content }} />
      </Section>
      {breeds && (
        <Section
          secondary
          footer={
            <ButtonGroup>
              <ButtonLink secondary href={getBreedsPagination(1)}>
                View More
              </ButtonLink>
            </ButtonGroup>
          }
        >
          {breeds.map((breed) => (
            <Tile
              imgUrl={breed.data.preview_image.url}
              imgAlt={breed.data.preview_image.alt}
              imgDimensions={breed.data.preview_image.dimensions}
              key={breed.uid}
              title={breed.data.name}
              href={getBreedPath(breed)}
              content={breed.data.intro}
              hrefText="Find Out More"
            />
          ))}
        </Section>
      )}
    </>
  );
};
