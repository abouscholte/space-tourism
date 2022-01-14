import React from 'react';
import { Helmet } from 'react-helmet';

export default function Head() {
  return (
    <Helmet>
      <meta name="description" content="Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed:wght@400;700&family=Bellefair&display=swap" />
    </Helmet>
  );
}
