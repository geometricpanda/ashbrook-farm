import React from 'react';
import Link from 'next/link';

export function Index() {
  return (
    <>
      <h1>Home</h1>
      <Link href="/breeds">Breeds</Link>
    </>
  );
}

export default Index;
