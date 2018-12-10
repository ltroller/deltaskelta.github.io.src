import React from 'react';
import { createStyles, WithStyles, Theme, withStyles, Typography } from '@material-ui/core';
import { graphql } from 'gatsby';
import GlobalLayout from '../components/Layout/global';
import Helmet from 'react-helmet';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import TagChip from '../components/tagChip';
import {
  BlogPostQuery,
  BlogPostQuery_mdx,
  BlogPostQuery_mdx_frontmatter,
  BlogPostQuery_site,
  BlogPostQuery_site_siteMetadata
} from '../gatsby-queries';
import moment from 'moment';

const styles = (theme: Theme) =>
  createStyles({
    postBody: {
      marginTop: theme.spacing.unit * 6
    }
  });

interface Props extends WithStyles<typeof styles> {
  data: BlogPostQuery;
}

const BlogPost = ({ classes, data }: Props) => {
  const { mdx, site } = data || ({} as BlogPostQuery);
  const { siteMetadata } = site || ({} as BlogPostQuery_site);
  const { author } = siteMetadata || ({} as BlogPostQuery_site_siteMetadata);
  const { frontmatter, code, timeToRead, tableOfContents, excerpt } = mdx || ({} as BlogPostQuery_mdx);
  const { title, created, edited, categories } = frontmatter || ({} as BlogPostQuery_mdx_frontmatter);

  // TODO: put this somewhere
  console.log(tableOfContents);

  return (
    <GlobalLayout>
      <Helmet
        title={title || undefined}
        meta={[
          { name: 'description', content: excerpt },
          { name: 'keywords', content: categories },
          { name: 'author', content: author }
        ]}
      />
      <Typography variant="h1">{title}</Typography>
      {categories && categories.map(c => c && <TagChip tag={c} />)}
      <TagChip tag={`${timeToRead} minute read`} />
      <TagChip tag={`created: ${moment(created).format('LLL')}`} />
      <TagChip tag={`edited: ${moment(edited).format('LLL')}`} />

      <div className={classes.postBody}>
        <MDXRenderer>{code && code.body}</MDXRenderer>
      </div>
    </GlobalLayout>
  );
};

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
    site {
      siteMetadata {
        author
      }
    }
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        created
        edited
        categories
      }
      code {
        body
      }
      timeToRead
      tableOfContents
      excerpt
    }
  }
`;

export default withStyles(styles)(BlogPost);
