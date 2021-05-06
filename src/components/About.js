import { Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import foto from "../images/fotoAlberto.jpg"

const About = ({title, dark, id}) => {
    const classes = useStyles();
    return (
        <div className={ `${classes.section} ${dark && classes.sectiondark}` }>
            <div className={ classes.sectioncontent } id={ id }>
                <Typography variant="h3">{ title }</Typography>
                <Card className={ classes.card }>
                    <CardMedia image={ foto } className={ classes.media } title="picture"/>
                    <CardContent className={ classes.cardcontent }>
                        Contenido de la tarjeta
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh"
    },
    sectiondark: {
        background: "#333",
        color: "#fff"
    },
    sectioncontent: {
        maxWidth: "80vw",
        margin: "0 auto",
    },
    card: {
        height: "70vh",
        display: "flex",
    },
    media: {
       width: "250px",
       height: "auto",
       objectFit: "cover",
    },
  }))

export default About
