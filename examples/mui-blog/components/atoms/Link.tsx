import React from 'react'

import MuiLink, { LinkProps as MuiLinkProps } from '@material-ui/core/Link'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

export type LinkProps = NextLinkProps & Exclude<MuiLinkProps, 'href'>

export const Link: React.FunctionComponent<LinkProps> = ({
  // derived from Link props of `next/link`
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref = true,
  prefetch,
  locale,
  children,
  ...muiLinkProps
}: LinkProps) => {
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
      <MuiLink {...muiLinkProps}>{children}</MuiLink>
    </NextLink>
  )
}

export default Link
