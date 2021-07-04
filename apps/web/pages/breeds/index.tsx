import { FC } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Section, Tile, P } from '@ashbrook-farm/web-components';
import { getAllBreeds, ApiResponse, Breed } from '../../api';
import { getBreedPath } from '../../helpers';

interface BreedsProps {
  data: ApiResponse<Breed>;
}

export const getStaticProps: GetStaticProps<BreedsProps> = async () => {
  const data = await getAllBreeds();
  return {
    revalidate: 60,
    props: {
      data
    }
  };
};


export const Breeds: FC<BreedsProps> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Our Breeds - Ashbrook Farm</title>
        <meta name="description" content="At Ashbrook Farm we keep a wide variety of hens giving us a great mix of laying birds and birds that make the garden look great."/>
      </Head>
      <Section title='Our Birds'>
        <P marginBottom>
          In our personal flocks, we keep a wide variety of hens ranging from
          Bantam Araucana to French Maran
        </P>
        <P>
          Keeping all these different birds has given us a great understanding
          of what birds are great for different
          situations, whether you’re looking for strong layers or pet breeds.
        </P>
      </Section>
      <Section secondary>
        {data.results.map((result, index) => (
          <Tile
            aboveFold={index < 2}
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

export default Breeds;
