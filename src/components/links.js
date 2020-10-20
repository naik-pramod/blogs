import React from "react"
import { Link } from "gatsby"
import { Tabs, Tab } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const navLinks = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "blogs",
    url: "/blog",
  },
]

const useStyles = makeStyles(theme => ({
  navlink: {
    background: "none",
    color: "#000033",
    textdecoration: "none",
    textDecoration: "none",
    maxWidth: "100%",
  },
  tablink: {
    ripple: {
      color: "blue",
    },
    height: "50%",
  },
}))

const tempLinks = navLinks.map(link => {
  return <Tab label={<Link to={link.url}>{link.text}</Link>}></Tab>
})

const PageLink = () => {
  const classes = useStyles()
  return (
    <Tabs>
      {navLinks.map(link => {
        return (
          <Tab
            className={classes.tablink}
            indicatorColor="primary"
            textColor="primary"
            centered
            label={
              <Link className={classes.navlink} to={link.url}>
                {link.text}
              </Link>
            }
          ></Tab>
        )
      })}
    </Tabs>
  )
}

export default PageLink
