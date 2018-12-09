import * as React from 'react';
import GlobalLayout from '../components/Layout/global';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { IndexQuery, IndexQuery_site, IndexQuery_site_siteMetadata } from '../gatsby-queries';
import { Typography } from '@material-ui/core';

interface Props {
  data: IndexQuery;
}

const Index = ({ data }: Props) => {
  const { site } = data;
  const { siteMetadata } = site || ({} as IndexQuery_site);
  const { title, description, author, keywords } = siteMetadata || ({} as IndexQuery_site_siteMetadata);

  return (
    <GlobalLayout>
      <Helmet
        title={title || undefined}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords },
          { name: 'author', content: author }
        ]}
      />
      <Typography variant="h2">Hi people</Typography>
      <Typography variant="body1">
        Welcome to your new <strong>{title}</strong>
      </Typography>
      <Typography variant="body1">Now go build something great.</Typography>
      <div>
        <Typography variant="h1">Richard Hamming on Luck</Typography>
        <div>
          <Typography variant="body1">
            From Richard Hamming’s classic and must-read talk,{' '}
            <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">You and Your Research</a>.
          </Typography>
          <blockquote>
            <p>
              There is indeed an element of luck, and no, there isn’t. The prepared mind sooner or later finds something
              important and does it. So yes, it is luck.{' '}
              <em>The particular thing you do is luck, but that you do something is not.</em>
            </p>
          </blockquote>
        </div>
        <p>Posted April 09, 2011</p>
      </div>
    </GlobalLayout>
  );
};

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        keywords
        author
      }
    }
  }
`;

export default Index;