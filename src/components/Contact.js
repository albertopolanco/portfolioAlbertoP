import { makeStyles } from '@material-ui/core'
import React from 'react'

const Contact = ({title, dark, id}) => {
    const classes = useStyles();
    return (
        <div className={ `${classes.section} ${dark && classes.sectiondark}`}>
            Contact page
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
  }))

export default Contact
