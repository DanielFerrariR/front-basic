import { Palette, PaletteOptions } from '@material-ui/core/styles/createPalette'

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    custom?: typeof import('src/styles').custom
  }

  interface Palette {
    custom: typeof import('src/styles').custom
  }
}
