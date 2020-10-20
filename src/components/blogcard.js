import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "20px",
  },
  media: {
    height: 140,
  },
  actions: {
    flexGrow: "1",
  },
})

const BlogCard = ({ postdata }) => {
  const classes = useStyles()
  const title = postdata.frontmatter.title || postdata.fields.slug
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {postdata.excerpt}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Typography variant="body2" color="textSecondary" component="p">
          {postdata.frontmatter.date}
        </Typography>
        <Button size="small" color="primary">
          <Link style={{ textDecoration: "none" }} to={postdata.fields.slug}>
            <span itemProp="headline">LEARN MORE</span>
          </Link>
        </Button>
      </CardActions>
    </Card>
  )
}
export default BlogCard
