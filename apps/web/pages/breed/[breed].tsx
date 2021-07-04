import { FC } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { FreeText, H1, Section, Focus } from '@ashbrook-farm/web-components';

import { ApiDocument, Breed, getBreed, getBreeds } from '../../api';
import { getBreedPath } from '../../helpers';

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
  const data = await getBreeds({ pageSize: 100 });
  const paths = data.results.map((breed) => getBreedPath(breed));
  return {
    paths,
    fallback: 'blocking',
  };
};

export const Breeds: FC<BreedsProps> = ({ data }) => {
  return (
    <Section>
      <Focus>
        <H1 marginBottom>{data.data.name}</H1>
      </Focus>
      <FreeText dangerouslySetInnerHTML={{ __html: data.data.content }} />
    </Section>
  );
};

export default Breeds;
