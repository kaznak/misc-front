import React, { FunctionComponent } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}))

export interface HeaderProps {
  categories?: Array<any>
  title: string
}

export const Header: FunctionComponent<HeaderProps> = ({
  categories = [],
  title,
}: HeaderProps) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      {[] === categories ? (
        <></>
      ) : (
        <Toolbar
          component="nav"
          variant="dense"
          className={classes.toolbarSecondary}
        >
          {categories.map(({ title, url }) => (
            <Link
              color="inherit"
              noWrap
              key={title}
              variant="body2"
              href={url}
              className={classes.toolbarLink}
            >
              {title}
            </Link>
          ))}
        </Toolbar>
      )}
    </React.Fragment>
  )
}

export default Header
