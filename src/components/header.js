import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core"
import PageLink from "./links"
import { SportsCricketOutlined } from "@material-ui/icons"
import SortIcon from "@material-ui/icons/Sort"

const useStyles = makeStyles(theme => ({
  appbar: {
    background: "none",
    color: "#000000",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
}))

const Header = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <AppBar position="static" className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            {data.site.siteMetadata.title}
          </h1>
          <PageLink></PageLink>
          <IconButton>
            <SortIcon></SortIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default Header
