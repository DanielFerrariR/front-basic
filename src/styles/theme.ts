import { responsiveFontSizes, createMuiTheme } from '@material-ui/core'
import { background } from 'src/images'

export const custom = {
  primaryMinus: '#7986cb',
  primary: '#3f51b5',
  primaryPlus: '#303f9f',
  primaryContrast: '#fff',
  secondaryMinus: '#ff4081',
  secondary: '#f50057',
  secondaryPlus: '#c51162',
  secondaryContrast: '#fff',
  overlayColor: 'rgba(0, 0, 0, 0.6)'
}

const theme = responsiveFontSizes(
  createMuiTheme({
    breakpoints: {
      keys: ['xs', 'sm', 'md', 'lg', 'xl'],
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920
      }
    },
    palette: {
      custom,
      common: {
        black: '#000',
        white: '#fff'
      },
      type: 'light',
      primary: {
        light: custom.primaryMinus,
        main: custom.primary,
        dark: custom.primaryPlus,
        contrastText: custom.primaryContrast
      },
      secondary: {
        light: custom.secondaryMinus,
        main: custom.secondary,
        dark: custom.secondaryPlus,
        contrastText: custom.secondaryContrast
      },
      error: {
        light: '#e57373',
        main: '#f44336',
        dark: '#d32f2f',
        contrastText: '#fff'
      },
      warning: {
        light: '#ffb74d',
        main: '#ff9800',
        dark: '#f57c00',
        contrastText: 'rgba(0, 0, 0, 0.87)'
      },
      info: {
        light: '#64b5f6',
        main: '#2196f3',
        dark: '#1976d2',
        contrastText: '#fff'
      },
      success: {
        light: '#81c784',
        main: '#4caf50',
        dark: '#388e3c',
        contrastText: 'rgba(0, 0, 0, 0.87)'
      },
      grey: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#eeeeee',
        300: '#e0e0e0',
        400: '#bdbdbd',
        500: '#9e9e9e',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
        A100: '#d5d5d5',
        A200: '#aaaaaa',
        A400: '#303030',
        A700: '#616161'
      },
      text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.54)',
        disabled: 'rgba(0, 0, 0, 0.38)',
        hint: 'rgba(0, 0, 0, 0.38)'
      },
      divider: 'rgba(0, 0, 0, 0.12)',
      background: {
        paper: '#fff',
        default: '#fff'
      },
      action: {
        active: 'rgba(0, 0, 0, 0.54)',
        hover: 'rgba(0, 0, 0, 0.04)',
        hoverOpacity: 0.04,
        selected: 'rgba(0, 0, 0, 0.08)',
        disabled: 'rgba(0, 0, 0, 0.26)',
        disabledBackground: 'rgba(0, 0, 0, 0.12)'
      }
    },
    shape: {
      borderRadius: 4
    },
    zIndex: {
      mobileStepper: 1000,
      speedDial: 1050,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500
    },
    props: {},
    overrides: {
      MuiCssBaseline: {
        '@global': {
          ...require('./keyframes'),
          body: {
            backgroundImage: `url(${background})`
          }
        }
      }
    }
  })
)

export default theme
