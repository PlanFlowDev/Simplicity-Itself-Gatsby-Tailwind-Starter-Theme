// Gatsby supports TypeScript natively!
import React from 'react';
import { PageProps, Link } from 'gatsby';

import Layout from 'src/components/Layout';
import SEO from 'src/components/SEO';

const SecondPage = (props: PageProps) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2 ({props.path})</p>
    <Link className="inline-block mb-6" to="/">
      Go back to the homepage
    </Link>
  </Layout>
);

export default SecondPage;
