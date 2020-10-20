import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogCard from "./blogcard"
import { useTheme, makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import theme from "../ui/theme"

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  media: {
    height: 140,
  },
})
const BlogList = () => {
  const classes = useStyles()

  return (
    <div className={classes.root} id="blog-list">
      <StaticQuery
        query={pageQuery}
        render={data => {
          return data.allMarkdownRemark.nodes.map(post => {
            return <BlogCard postdata={post}></BlogCard>
          })
        }}
      />
    </div>
  )
}

export default BlogList

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
      }
    }
  }
`
