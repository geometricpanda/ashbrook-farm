import { FC } from 'react';
import { GetStaticProps } from 'next';
import { ApiDocument, getPage, Page } from '../../api';
import { PageLayout } from '../../common/page-layout';

interface EggClubProps {
  page: ApiDocument<Page>;
}

export const getStaticProps: GetStaticProps<EggClubProps> = async () => {
  const page = await getPage('egg-club');
  return {
    props: {
      page,
    },
  };
};

const EggClub: FC<EggClubProps> = ({ page }) => {
  return (
    <>
      <PageLayout page={page} />
    </>
  );
};

export default EggClub;
