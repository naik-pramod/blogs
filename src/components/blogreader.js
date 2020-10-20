import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"
import Bio from "./bio"
import { Container } from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    maxWidth: "700px",
    margin: "150px",
    alignItems: "center",
    alignContent: "center",
  },
  media: {
    height: 140,
  },
  actions: {
    flexGrow: "1",
  },
})

const BlogReader = ({ postdata }) => {
  const classes = useStyles()
  const title = postdata.frontmatter.title || postdata.fields.slug

  return (
    <Container className={classes.root}>
      <Typography gutterBottom variant="h3" component="h5">
        {title}
      </Typography>
      <section>
        {" "}
        <Bio />
      </section>
      <section
        dangerouslySetInnerHTML={{ __html: postdata.html }}
        itemProp="articleBody"
      />
    </Container>
  )
}

export default BlogReader
