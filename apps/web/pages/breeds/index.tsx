import { FC } from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { H2, P, A, Section, Tile } from '@ashbrook-farm/web-components';

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
      data,
    },
  };
};

export const Breeds: FC<BreedsProps> = ({ data }) => {
  return (
    <Section>
      {data.results.map((result) => (
        <Tile
          key={result.uid}
          title={result.data.name}
          href={getBreedPath(result)}
          content={result.data.intro}
          hrefText="Find Out More"
        />
      ))}
    </Section>
  );
};

export default Breeds;
