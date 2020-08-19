import React from 'react'
import {
  Typography as MuiTypography,
  TypographyProps as OldTypographyProps,
  styled
} from '@material-ui/core'
import {
  spacing,
  SpacingProps,
  sizing,
  SizingProps,
  palette,
  PaletteProps,
  borders,
  BordersProps,
  typography,
  TypographyProps as MuiTypographyProps,
  compose,
  css
} from '@material-ui/system'
import { Link } from 'react-router-dom'

type TypographyProps = Omit<OldTypographyProps, 'color'> &
  SpacingProps &
  SizingProps &
  PaletteProps &
  BordersProps &
  MuiTypographyProps &
  ExtraProps

interface ExtraProps {
  css?: React.CSSProperties
  component?: React.ReactElement | typeof Link | string
  to?: string
  htmlFor?: string
}

const StyledTypography = styled(({ newComponent, ...props }) => (
  <MuiTypography component={newComponent} {...props} />
))(css(compose(spacing, sizing, palette, borders, typography)))

const Typography: React.FC<TypographyProps> = ({
  children,
  component,
  css: newCss = {},
  ...props
}) => {
  return (
    <StyledTypography newComponent={component} css={newCss} {...props}>
      {children}
    </StyledTypography>
  )
}

StyledTypography.propTypes = {}

export default Typography
