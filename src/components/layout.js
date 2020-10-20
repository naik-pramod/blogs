import React from "react"
import Header from "./header"
import Scroll from "./scroll"
import { CssBaseline } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Link, graphql, useStaticQuery } from "gatsby"

const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "pic-background.jpg" }) {
        id
        relativePath
      }
    }
  `)
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      minHeight: "100vh",
      backgroundImage: `url(http://localhost:8000/content/assets/pic-background.jpg)`,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }))
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div>
        <Header></Header>
        {children}
      </div>
      <Scroll showBelow={10} />
      <CssBaseline />
    </div>
  )
}

export default Layout
