import { FC } from 'react';
import { GetStaticProps } from 'next';

import { getBreed, getPage } from '../../api';
import { PageLayout, PageLayoutProps } from '../../common/page-layout';

type BreedsProps = PageLayoutProps;

export const getStaticProps: GetStaticProps<BreedsProps> = async () => {
  const page = await getPage('breeds');
  const breeds = await Promise.all(
    page.data.breeds.map((breed) => getBreed(breed.breed.uid))
  );

  return {
    revalidate: 60,
    props: {
      breeds,
      page,
    },
  };
};

export const Breeds: FC<BreedsProps> = ({ page, breeds }) => (
  <PageLayout page={page} breeds={breeds} />
);

export default Breeds;
