import { FC } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';

import { getAllBreeds, Breed, getBreed, ApiDocument } from '../../api';

interface BreedsProps {
  data: ApiDocument<Breed>;
}

export const getStaticProps: GetStaticProps<BreedsProps> = async ({
  params,
}) => {
  const { breed } = params;
  const data = await getBreed(breed as string);
  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getAllBreeds();
  const paths = data.results.map((result) => `/breeds/${result.uid}`);
  return {
    paths,
    fallback: false,
  };
};

export const Breeds: FC<BreedsProps> = ({ data }) => {
  return (
    <>
      <Link href="/breeds">Back</Link>
      <h1>{data.data.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.data.content }} />
    </>
  );
};

export default Breeds;
