import React from 'react'

import { makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { Link, LinkProps } from '../atoms/Link'

const useStyles = makeStyles((_theme: Theme) => ({
  title: {},
}))

export type HeaderProps = Partial<Pick<LinkProps, 'href' | 'as'>> & {
  title: string
}

export const Header: React.FunctionComponent<HeaderProps> = ({
  title,
  href,
  as,
}: HeaderProps) => {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar>
        {href ? (
          <Link href={href} as={as} color="inherit">
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
          </Link>
        ) : (
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  )
}
