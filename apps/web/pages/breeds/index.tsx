import { FC } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { ButtonLink, H1, P, Section, Tile } from '@ashbrook-farm/web-components';

import { ApiResponse, Breed, getBreeds } from '../../api';
import { getBreedPath, getBreedsPagination } from '../../helpers';

interface BreedsProps {
  data: ApiResponse<Breed>;
}

export const getStaticProps: GetStaticProps<BreedsProps> = async () => {
  const data = await getBreeds({ pageSize: 3 });
  return {
    revalidate: 60,
    props: {
      data,
    },
  };
};

export const Breeds: FC<BreedsProps> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Our Breeds - Ashbrook Farm</title>
        <meta
          name="description"
          content="At Ashbrook Farm we keep a wide variety of hens giving us a great mix of laying birds and birds that make the garden look great."
        />
      </Head>

      <Section
        header={
            <H1>Our Birds</H1>
        }
      >
        <P marginBottom>
          In our personal flocks, we keep a wide variety of hens ranging from
          Bantam Araucana to French Maran.
        </P>
        <P>
          Keeping all these different birds has given us a great understanding
          of what birds are great for different situations, whether you’re
          looking for strong layers or pet breeds.
        </P>
      </Section>

      <Section
        secondary
        footer={
          <ButtonLink secondary href={getBreedsPagination(1)}>
            View More
          </ButtonLink>
        }
      >
        {data.results.map((result) => (
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

export default Breeds;
