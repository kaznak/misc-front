import React from 'react'

import MuiLink, { LinkProps as MuiLinkProps } from '@material-ui/core/Link'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

export type NextLinkWrapperProps<T> = NextLinkProps &
  Exclude<T, keyof NextLinkProps>

export function NextLinkWrapper<T>(
  Component // : new () => React.Component<T, any>
) {
  return ({
    // derived from Link props of `next/link`
    href,
    as,
    replace,
    scroll,
    shallow,
    passHref = true,
    prefetch,
    locale,
    ...muiLinkProps
  }: NextLinkWrapperProps<T>) => {
    const nextLinkProps = {
      href,
      as,
      replace,
      scroll,
      shallow,
      passHref,
      prefetch,
      locale,
    }

    return (
      <NextLink {...nextLinkProps}>
        <Component {...muiLinkProps} />
      </NextLink>
    )
  }
}

export type LinkProps = NextLinkWrapperProps<MuiLinkProps>
export const Link: React.FunctionComponent<LinkProps> = NextLinkWrapper(MuiLink)

export default Link
