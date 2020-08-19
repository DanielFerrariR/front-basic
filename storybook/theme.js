import { create } from '@storybook/theming/create'
import logo from './images/logo.svg'

const theme = create({
  base: 'light',
  colorPrimary: '#3f51b5',
  colorSecondary: '#f50057',
  appBg: 'rgb(246, 249, 252)',
  appContentBg: 'white',
  appBorderColor: 'rgba(0,0,0,0.1)',
  appBorderRadius: 4,
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',
  textColor: '#333333',
  textInverseColor: 'rgba(255,255,255,0.9)',
  barTextColor: 'silver',
  barSelectedColor: '#f50057',
  barBg: 'white',
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,
  brandTitle: 'Squid Storybook',
  brandUrl: 'https://squid.com',
  brandImage: logo
})

export default theme
