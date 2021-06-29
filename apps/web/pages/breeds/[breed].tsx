import { FC } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { A, H1, FreeText } from '@ashbrook-farm/web-components';

import { getAllBreeds, Breed, getBreed, ApiDocument } from '../../api';
import { Section } from '@ashbrook-farm/web-components';

interface BreedsProps {
  data: ApiDocument<Breed>;
}

export const getStaticProps: GetStaticProps<BreedsProps> = async ({
  params,
}) => {
  const { breed } = params;
  const data = await getBreed(breed as string);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    revalidate: 60,
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
    fallback: 'blocking',
  };
};

export const Breeds: FC<BreedsProps> = ({ data }) => {
  return (
    <Section>
      <Link href="/breeds" passHref>
        <A>Back</A>
      </Link>
      <H1>{data.data.name}</H1>
      <FreeText dangerouslySetInnerHTML={{ __html: data.data.content }} />
    </Section>
  );
};

export default Breeds;
