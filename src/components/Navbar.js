import { AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, makeStyles, Toolbar } from '@material-ui/core'
import { useState } from 'react'
import logo from '../images/logoAP.png'
import { Link, animateScroll as scroll } from 'react-scroll'
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone"
import EmojiObjectsTwoToneIcon from "@material-ui/icons/EmojiObjectsTwoTone"
import BuildTwoToneIcon from "@material-ui/icons/BuildTwoTone"
import ContactMailTwoToneIcon from "@material-ui/icons/ContactMailTwoTone"
import MenuIcon from "@material-ui/icons/Menu"
import CancelIcon from "@material-ui/icons/Cancel"
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll'






const Navbar = () => {
    const classes = useStyles();
    const [ open, setOpen ] = useState(false)

    const links = [
        {
            id: "about",
            text: "About me",
            icon: <InfoTwoToneIcon fontSize="large"/>
        },
        {
            id: "skills",
            text: "Skills",
            icon: <EmojiObjectsTwoToneIcon fontSize="large" className={classes.light}/>
        },
        {
            id: "work",
            text: "My work",
            icon: <BuildTwoToneIcon fontSize="large"/>
        },
        {
            id: "contact",
            text: "Get in touch",
            icon: <ContactMailTwoToneIcon fontSize="large"/>
        },
    ]

    const scrollToTop = () => {
        scroll.scrollToTop()
    }
    return (
        <>
        <AppBar position="sticky" className={ classes.root }>
           <Toolbar className={ classes.toolbar }>
                <img 
                    src={ logo } 
                    className={ classes.logo } 
                    alt="Logo" 
                    onClick={scrollToTop}
                    />
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
                <IconButton edge="end"
                     className={ classes.menubutton }
                     onClick={()=>setOpen(!open)}
                      > 
                      <MenuIcon fontIze="large"/> 
                </IconButton> 
           </Toolbar>
        </AppBar>
            <Drawer anchor="right" open={ open } onClose={()=> setOpen(false)} >
                <IconButton  onClick={()=> setOpen(false)} className={classes.cancelicon} >
                    <CancelIcon fontSize="large" />
                </IconButton>
                <Divider/>
                {
                        links.map(({ id, text, icon }, index) => (
                            <Link key={ index }
                                className={ classes.sidebar}
                                to={ id } 
                                spy={ true } 
                                activeClass="active" 
                                smooth={ true } 
                                duration={ 500 } 
                                offset={ -70 } >
                            <ListItem component= "h5">
                                <span>
                                    <ListItemIcon>
                                        {icon}
                                    </ListItemIcon>
                                </span>{text}
                            </ListItem>
                                </Link>
                        ))
                    }
            </Drawer>
        </>
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
    light: {
        color: "#ffcc00"
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
    },
    cancelicon: {
        color: "tomato",
        position: "absolute",
        top: 0,
        right: 10
    },
    sidebar: {
        width: "40vw",
        [theme.breakpoints.down("sm")]: {
            width: "60vw"
        },
        "& h5": {
            margin: theme.spacing(10, 0, 0, 4),
            fontSize: "1.4rem",
            color: "#333",
            fontWeight: "bold",
        },
        "& h5:hover": {
            color: "tomato",
            cursor: "pointer",
        }

    },
    
  }))

export default Navbar
