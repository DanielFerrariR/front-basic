import React from 'react'
import {
  Box as MuiBox,
  BoxProps as OldBoxProps,
  styled
} from '@material-ui/core'
import {
  borders,
  display,
  flexbox,
  palette,
  positions,
  shadows,
  sizing,
  spacing,
  typography,
  css,
  breakpoints,
  compose
} from '@material-ui/system'
import { Link } from 'react-router-dom'

type BoxProps = Omit<OldBoxProps, 'css' | 'component'> & ExtraProps

interface ExtraProps {
  css?: React.CSSProperties
  xs?: React.CSSProperties
  sm?: React.CSSProperties
  md?: React.CSSProperties
  lg?: React.CSSProperties
  xl?: React.CSSProperties
  component?: React.ReactElement | typeof Link | string
  to?: string
  ref?: any
  target?: string
  rel?: string
  href?: string
}

const StyledBox = styled(({ newRef, newComponent, ...props }) => (
  <MuiBox ref={newRef} component={newComponent} {...props} />
))(
  compose(
    css(
      compose(
        borders,
        display,
        flexbox,
        palette,
        positions,
        shadows,
        sizing,
        spacing,
        typography
      )
    ),
    breakpoints(
      compose(
        borders,
        display,
        flexbox,
        palette,
        positions,
        shadows,
        sizing,
        spacing,
        typography
      )
    )
  )
)

const Box: React.FC<BoxProps> = React.forwardRef(
  ({ children, component, css: newCss = {}, ...props }, ref) => {
    return (
      <StyledBox
        newRef={ref}
        newComponent={component}
        css={newCss as any}
        {...props}
      >
        {children}
      </StyledBox>
    )
  }
)

StyledBox.propTypes = {}

export default Box
