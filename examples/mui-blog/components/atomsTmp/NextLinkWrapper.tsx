import React from 'react'

import MuiLink, { LinkProps as MuiLinkProps } from '@material-ui/core/Link'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

export type NextLinkWrapperPropsNarrow<P> = NextLinkProps &
  Exclude<P, keyof NextLinkProps>

export function NextLinkWrapper<P>({
  component: Component,
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
}: NextLinkWrapperPropsNarrow<P> & {
  component: React.JSXElementConstructor<P>
}) {
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
      {/* @ts-ignore */}
      <Component {...muiLinkProps} />
    </NextLink>
  )
}

export type LinkProps = NextLinkWrapperPropsNarrow<MuiLinkProps>
export const Link: React.FunctionComponent<LinkProps> = (props: LinkProps) => (
  <NextLinkWrapper component={MuiLink} {...props} />
)

export default Link
