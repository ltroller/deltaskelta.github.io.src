import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppBar, createStyles, Theme, Toolbar, Typography, WithStyles, withStyles } from '@material-ui/core';
import { Home, KeyboardArrowLeft, Menu } from '@material-ui/icons';
import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { StateConsumer } from '../../context';
import { HeaderQuery, HeaderQuery_site, HeaderQuery_site_siteMetadata } from '../../gatsby-queries';
import { Link } from '../link';

interface Props extends WithStyles<typeof styles> {}

const styles = (theme: Theme) =>
  createStyles({
    right: {
      marginRight: theme.spacing.unit * 2
    },
    flex: {
      flexGrow: 1
    },
    link: {
      color: 'white',
      textDecoration: 'none'
    },
    bar: {
      zIndex: theme.zIndex.drawer + 1
    },
    menu: {
      fontSize: theme.typography.fontSize * 2.5,
      fontWeight: 'bold',
      marginRight: theme.spacing.unit
    }
  });

const header = ({ classes }: Props) => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            twitter
            github
          }
        }
      }
    `}
  >
    {(data: HeaderQuery) => {
      const { site } = data;
      const { siteMetadata } = site || ({} as HeaderQuery_site);
      const { twitter, github } = siteMetadata || ({} as HeaderQuery_site_siteMetadata);

      return (
        <StateConsumer>
          {({ mobile, drawerOpen, toggleDrawer }) => (
            <AppBar position="fixed" className={classes.bar}>
              <Toolbar>
                {drawerOpen ? (
                  <KeyboardArrowLeft className={classes.menu} onClick={toggleDrawer} />
                ) : (
                  <Menu className={classes.menu} onClick={toggleDrawer} />
                )}
                <Typography className={classes.flex}>
                  <Link to="/" white className={classes.link}>
                    {mobile ? <Home className={classes.menu} /> : `deltaskelta.github.io`}
                  </Link>
                </Typography>
                <Link to={twitter || ''} white>
                  <FontAwesomeIcon size="2x" icon={faTwitter} className={classes.right} />
                </Link>
                <Link to={github || ''} white>
                  <FontAwesomeIcon size="2x" icon={faGithub} className={classes.right} />
                </Link>
              </Toolbar>
            </AppBar>
          )}
        </StateConsumer>
      );
    }}
  </StaticQuery>
);

export const Header = withStyles(styles)(header);
