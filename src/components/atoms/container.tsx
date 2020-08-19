import React from 'react'
import {
  Container as MuiContainer,
  ContainerProps as OldContainerProps,
  styled
} from '@material-ui/core'
import {
  spacing,
  SpacingProps,
  display,
  DisplayProps,
  flexbox,
  FlexboxProps,
  compose,
  css
} from '@material-ui/system'
import { Link } from 'react-router-dom'

type ContainerProps = OldContainerProps &
  SpacingProps &
  FlexboxProps &
  DisplayProps &
  ExtraProps

interface ExtraProps {
  css?: React.CSSProperties
  component?: React.ReactElement | typeof Link | string
  to?: string
}

const StyledContainer = styled(({ newComponent, ...props }) => (
  <MuiContainer component={newComponent} {...props} />
))(css(compose(spacing, flexbox, display)))

const Container: React.FC<ContainerProps> = ({
  children,
  component,
  css: newCss = {},
  ...props
}) => {
  return (
    <StyledContainer css={newCss} newComponent={component} {...props}>
      {children}
    </StyledContainer>
  )
}

StyledContainer.propTypes = {}

export default Container
