import { AppBar, IconButton, List, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'
import logo from '../images/logoAP.png'
import { Link, animateScroll as scroll } from 'react-scroll'
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone"
import EmojiObjectsTwoToneIcon from "@material-ui/icons/EmojiObjectsTwoTone"
import BuildTwoToneIcon from "@material-ui/icons/BuildTwoTone"
import ContactMailTwoToneIcon from "@material-ui/icons/ContactMailTwoTone"
import MenuIcon from "@material-ui/icons/Menu"



const links = [
    {
        id: "about",
        text: "About me",
        icon: <InfoTwoToneIcon/>
    },
    {
        id: "skills",
        text: "Skills",
        icon: <EmojiObjectsTwoToneIcon/>
    },
    {
        id: "work",
        text: "My work",
        icon: <BuildTwoToneIcon/>
    },
    {
        id: "contact",
        text: "Get in touch",
        icon: <ContactMailTwoToneIcon/>
    },
]

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar position="sticky" className={ classes.root }>
           <Toolbar className={ classes.toolbar }>
                <img src={ logo } className={ classes.logo } alt="Logo" />
                <List className={ classes.menu }>
                    {
                        links.map(({ id, text }, index) => (
                            <Link key={ index } 
                            to={ id } 
                            spy={ true } 
                            activeClass="active" 
                            smooth={ true } 
                            duration={ 500 } 
                            offset={ -70 } >
                                { text }
                                </Link>
                        ))
                    }
                </List>
                <IconButton edge="end" className={ classes.menubutton }> <MenuIcon fontIze="large"/> 
                </IconButton>
                
           </Toolbar>
        </AppBar>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#fafafa",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
    },
    toolbar: {
        didplay: "flex",
        justifyContent: "flex-start",
        alignitems: "center",
    },
    logo: {
        height: "1.5rem",
        objectFit: "contain",
        "&:hover": {
            cursor: "pointer"
        }
    },
    menu: {
        [theme.breakpoints.down("sm")]: {
            display: "none"
        },
        "& a": {
            color: "#333",
            fontSize: "1.4rem",
            fontWeight: "bold",
            marginLeft: theme.spacing(3)
        },
        "& a:hover": {
            cursor: "pointer",
            color: "tomato",
            borderBottom: "3px solid tomato"
        },
    },
        menubutton: {
            display: "none",
            [theme.breakpoints.down("sm")]: {
                display: "block",
                color: "tomato",
                position: "absolute",
                top: 0,
                right: 10,

            }
        }
    
  }))

export default Navbar
