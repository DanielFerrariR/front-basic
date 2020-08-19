import React from 'react'
import { styled, makeStyles } from '@material-ui/core'
import { SkeletonProps as OldSkeletonProps } from '@material-ui/lab'
import {
  spacing,
  SpacingProps,
  sizing,
  SizingProps,
  borders,
  BordersProps,
  compose
} from '@material-ui/system'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    backgroundColor: theme.palette.action.hover
  },
  text: {
    marginTop: 0,
    marginBottom: 0,
    borderRadius: theme.shape.borderRadius,
    '&:empty:before': {
      content: '"\\00a0"'
    }
  },
  rect: {},
  circle: {
    borderRadius: '50%'
  },
  pulse: {
    animation: '$pulse 1.5s ease-in-out 0.5s infinite'
  },
  '@keyframes pulse': {
    '0%': {
      opacity: 1
    },
    '50%': {
      opacity: 0.4
    },
    '100%': {
      opacity: 1
    }
  },
  wave: {
    position: 'relative',
    overflow: 'hidden',
    '&::after': {
      animation: '$wave 1.6s linear 0.5s infinite',
      background: `linear-gradient(90deg, transparent, ${theme.palette.action.hover}, transparent)`,
      content: '""',
      position: 'absolute',
      transform: 'translateX(-100%)',
      bottom: 0,
      left: 0,
      right: 0,
      top: 0,
      zIndex: 1
    }
  },
  '@keyframes wave': {
    '0%': {
      transform: 'translateX(-100%)'
    },
    '60%': {
      transform: 'translateX(100%)'
    },
    '100%': {
      transform: 'translateX(100%)'
    }
  }
}))

interface OldExtraProps {
  component?: any
}

const MuiSkeleton: React.FC<
  OldSkeletonProps & OldExtraProps
> = React.forwardRef((props, ref) => {
  const classes = useStyles()
  const {
    animation = 'pulse',
    className,
    component: Component = 'span',
    height,
    variant = 'text',
    width,
    ...other
  } = props

  return (
    <Component
      ref={ref}
      className={clsx(
        classes.root,
        classes[variant],
        animation && classes[animation],
        className
      )}
      {...other}
      style={{
        width,
        height,
        ...other.style
      }}
    />
  )
})

type SkeletonProps = Omit<OldSkeletonProps, 'width' | 'height'> &
  SizingProps &
  SpacingProps &
  BordersProps &
  ExtraProps

interface ExtraProps {
  component?: React.ReactElement | typeof Link | string
  to?: string
}

const StyledSkeleton = styled(({ newComponent, ...props }) => (
  <MuiSkeleton component={newComponent} {...props} />
))(compose(spacing, sizing, borders))

const Skeleton: React.FC<SkeletonProps> = ({ component, ...props }) => {
  return <StyledSkeleton newComponent={component} {...props} />
}

StyledSkeleton.propTypes = {}

export default Skeleton
