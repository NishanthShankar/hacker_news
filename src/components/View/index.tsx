import * as React from 'react'
import styles from './index.styles'

const getStyles = (init: object, props: IClassProps): object => {
  let style = init ?? {}
  if (props.flex ?? false) style = { ...style, ...styles.flexIt }
  if (props.center ?? false) style = { ...style, ...styles.center }
  if (props.style != null) style = { ...style, ...props.style }

  return style
}

export interface IViewProps {
  children?: React.ReactNode
  flex?: boolean
  [key: string]: any
}

export interface IClassProps {
  flex?: boolean
  center?: boolean
  style?: object
  newCss?: string
}

export function View ({
  children,
  style,
  flex,
  center,
  ...restProps
}: IViewProps): JSX.Element {
  const styleProps = { style, flex, center }
  return (
    <div style={getStyles(styles.flex, styleProps)} {...restProps}>
      {children}
    </div>
  )
}

export function RView ({
  children,
  style,
  flex,
  center,
  ...restProps
}: IViewProps): JSX.Element {
  const styleProps = { style, flex, center }
  return (
    <div style={getStyles(styles.flexRow, styleProps)} {...restProps}>
      {children}
    </div>
  )
}
