import {
  Drawer as MDDrawer,
  Hidden,
  SwipeableDrawer,
  withStyles,
  Theme,
  createStyles,
  WithStyles
} from '@material-ui/core';

import React from 'react';
import c from 'classnames';

export const drawerWidth = 280;

const styles = (theme: Theme) =>
  createStyles({
    drawer: {
      zIndex: theme.zIndex.drawer,
      marginTop: 65,
      overflowY: 'scroll',
      height: 'calc(100% - 64px)',
      borderRight: '0px solid'
    },
    drawerContent: {
      width: drawerWidth,
      alignContent: 'center',
      height: '101%'
    },
    drawerContentTopPadding: {
      // the drawer comes under the bar on desktop so it needs some top padding
      paddingTop: 85
    },
    outerDiv: {
      marginTop: 65
    },
    drawerContainer: {
      height: '101%'
    }
  });

interface Props extends WithStyles<typeof styles> {
  children: JSX.Element | JSX.Element[] | (JSX.Element | JSX.Element[] | null)[];
}

class Drawer extends React.Component<Props, {}> {
  setOpen = () => console.log('setOpen called');
  render() {
    const { classes, children } = this.props;

    return (
      <div className={classes.outerDiv}>
        <div>
          <Hidden mdUp>
            {/* show only on mobile screens */}
            <SwipeableDrawer
              open={true}
              onOpen={() => this.setOpen()}
              onClose={() => this.setOpen()}
              variant="temporary"
              anchor="left"
              ModalProps={{ keepMounted: true }}
            >
              <div className={classes.drawerContainer}>
                <div className={classes.drawerContainer}>{children}</div>
              </div>
            </SwipeableDrawer>
          </Hidden>
          <Hidden smDown>
            {/* show only on desktops */}
            <MDDrawer open variant="permanent" anchor="left">
              <div className={c(classes.drawerContent, classes.drawerContentTopPadding)}>
                <div className={classes.drawerContent}>{children}</div>
              </div>
            </MDDrawer>
          </Hidden>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Drawer);