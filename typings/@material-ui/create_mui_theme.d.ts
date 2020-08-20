import { Palette, PaletteOptions } from '@material-ui/core/styles/createPalette'

declare module '@material-ui/core/styles/createPalette' {
  interface CustomPaletteColorOptions {
    primaryMinus: string
    primary: string
    primaryPlus: string
    primaryContrast: string
    secondaryMinus: string
    secondary: string
    secondaryPlus: string
    secondaryContrast: string
    overlayColor: string
  }

  interface CustomPaletteColor {
    primaryMinus?: string
    primary?: string
    primaryPlus?: string
    primaryContrast?: string
    secondaryMinus?: string
    secondary?: string
    secondaryPlus?: string
    secondaryContrast?: string
    overlayColor?: string
  }

  interface PaletteOptions {
    custom?: CustomPaletteColorOptions
  }

  interface Palette {
    custom: CustomPaletteColor
  }
}
