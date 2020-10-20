import React, { useEffect, useState } from "react"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Blog from "./blog"
import Typical from "react-typical"
import SEO from "../components/seo"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, ThemeProvider, IconButton, Collapse } from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import theme from "../ui/theme"
import { ExpandMore } from "@material-ui/icons"
import BlogList from "../components/bloglist"
import BlogCard from "../components/blogcard"
import { Link as Scroll } from "react-scroll"
import BackgroundImg from "../../content/assets/pic-background.jpg"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
    justifyContent: "center",
    //backgroundImage: `url(${"https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"})`,
  },
  container: {
    textAlign: "center",
  },
  title: {
    fontSize: "3rem",
    justifyContent: "center",
  },
  goDown: {
    color: "#5aff3d",
    fontSize: "4rem",
  },
}))
const IndexPage = () => {
  const classes = useStyles()
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    setChecked(true)
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <div className={classes.root}>
          <Collapse
            in={checked}
            {...(checked ? { timeout: 1000 } : {})}
            collapsedHeight={30}
          >
            <div className={classes.container}>
              <h2 className={classes.title}>
                Welcome to <br />
              </h2>
              <Scroll to="blog-list" smooth={true}>
                <IconButton>
                  <ExpandMoreIcon className={classes.goDown}></ExpandMoreIcon>
                </IconButton>
              </Scroll>
            </div>
          </Collapse>
        </div>
        <BlogList></BlogList>
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPage
