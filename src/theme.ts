import { createMuiTheme } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import indigo from '@material-ui/core/colors/indigo';
import createSpacing from '@material-ui/core/styles/createSpacing';

export const spacing = 8;

export const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: grey,
    error: {
      light: 'rgba(128,0,0,.9)',
      main: 'rgba(128,0,0,.9)',
      dark: 'rgba(128,0,0,.9)',
      contrastText: '#FFFFFF'
    },
    background: {
      default: '#FFFFFF'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 5
      }
    },
    MuiPaper: {
      rounded: {
        borderRadius: 5
      }
    }
  },
  spacing: createSpacing(spacing),
  typography: {
    fontFamily: '"Ubuntu", sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
      lineHeight: 1.3,
      borderBottom: '1px solid rgba(0,0,0,.1)',
      color: 'rgba(0,0,0,.74)',
      margin: `${spacing * 3}px 0px`
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: 'rgba(0,0,0,.74)',
      margin: `${spacing * 3}px 0px`
    },
    h3: {
      fontSize: '1.17rem',
      fontWeight: 'bold',
      color: 'rgba(0,0,0,.74)',
      margin: `${spacing * 3}px 0px`
    },
    h4: {
      fontSize: '1.12rem',
      fontWeight: 'bold',
      color: 'rgba(0,0,0,.74)',
      margin: `${spacing * 3}px 0px`
    },
    h5: {
      fontSize: '0.83rem',
      fontWeight: 'bold',
      color: 'rgba(0,0,0,.74)'
    },
    h6: {
      fontSize: '0.75rem',
      fontWeight: 'bold',
      color: 'rgba(0,0,0,.74)'
    },
    body1: {
      // margin: `${spacing * 2}px 0px`
    }
  }
});