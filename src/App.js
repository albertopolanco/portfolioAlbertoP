import { createMuiTheme, makeStyles, MuiThemeProvider } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import About from "./components/About";
import Contact from "./components/Contact";
import MyWork from "./components/MyWork";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] },
    secondary: { main: "#333"}
  }
}) // con esta variable todos los color primary o secundary nos los pone como los hemos declarado

function App() {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
      <Navbar />
      <About title="About me" id="about" dark={true } />
      <Skills title="My coding journey" id="skills" dark={false } />
      <MyWork title="My work" id="work" dark={true } />
      <Contact title="Get in touch" id="contact" dark={false } />      
    </div>
    </MuiThemeProvider>
    
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
  }
}))

export default App;
