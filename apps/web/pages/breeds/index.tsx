import { FC } from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';

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
    <ul>
      {data.results.map((result) => (
        <li key={result.id}>
          <h1>{result.data.name}</h1>
          <div dangerouslySetInnerHTML={{ __html: result.data.intro }} />
          <Link href={getBreedPath(result)}>Read More</Link>
          <hr />
        </li>
      ))}
    </ul>
  );
};

export default Breeds;
