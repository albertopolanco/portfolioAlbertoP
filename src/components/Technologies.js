import javascript from "../images/javascript.png"
import html5 from "../images/html5.png"
import css3 from "../images/css3.png"
import react from "../images/react.png"
import node from "../images/node.png"
import { Timeline, TimelineConnector, TimelineContent, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@material-ui/lab"
import { makeStyles, Paper, Typography } from "@material-ui/core"
import StarRating from "./StarRating"

const Technologies = () => {
   const classes = useStyles() 
    const skills = [
        {
            year: "2020",
            src: html5,
            title: "HTML 5",
            stars: 3,
        },
        {
            year: "2020",
            src: css3,
            title: "CSS ",
            stars: 3,
        },
        {
            year: "2020",
            src: javascript,
            title: "JavaScript",
            stars: 3,
        },
        {
            year: "2020",
            src: react,
            title: "React js",
            stars: 3,
        },
        {
            year: "2020",
            src: node,
            title: "Node js",
            stars: 3,
        },
    ]


    return (
        <Timeline align="left">
            {
                skills.map(({year, src, title, stars}, index)=> (
                  <TimelineItem key={index}>
                      <TimelineOppositeContent>
                          <Typography varian="h6" color="textSecondary">
                              {year}
                          </Typography>
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                          <img src={src} alt={title} className={classes.customlogo}/>
                          <TimelineConnector/>
                      </TimelineSeparator>
                      <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                              <Typography variant="h6" component="h1">
                              {title}
                              </Typography>
                              <StarRating stars={stars}/>
                          </Paper>
                      </TimelineContent>
                      
                  </TimelineItem>
                ))
            }
        </Timeline>
    )
}

const useStyles = makeStyles((theme) => ({
    customlogo: {
        width: "25px",
    },
    paper: {
        padding: "6px 16px",
        maxWidth: "200px"
        
    },

  }))

export default Technologies
