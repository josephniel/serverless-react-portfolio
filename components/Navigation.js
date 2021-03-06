import React from 'react';

import Link from 'next/link';


const Navigation = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
);

export default Navigation;
