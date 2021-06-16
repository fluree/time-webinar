import themeObject from '@fluree/mui-theme';
import { FlureeConn, FlureeProvider } from '@fluree/react-wrapper';
import { AppBar, createMuiTheme, makeStyles, ThemeProvider, Toolbar } from '@material-ui/core';
import React from 'react';
import './App.css';
import TimeTravel from './components/TimeTravel';
// import FlureeIcon from './FlureeIcon';


const myconn = new FlureeConn({
  servers: "http://localhost:8090",
  ledger: "time/webinar2",
  workerUrl: "/flureeworker.js"
});

let useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    height: '3.5rem',
    backgroundColor: '#091133'
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  logo: {
    width: '24px',
    height: '24px'
  }
}));

const App = () => {
  const flureeTheme = createMuiTheme(themeObject);
  const classes = useStyles();
  return (
    <ThemeProvider theme={flureeTheme}>
      <FlureeProvider conn={myconn}>
        <main className={classes.root}>
          {/* <AppBar position='static' >
            <Toolbar className={classes.header}> */}
              {/* <img src="./logo.svg" className={classes.logo} onerror="this.onerror=null; this.src='./White Horizontal.png'"/> */}

                {/* <FlureeIcon /> */}
             
              {/* <IconButton edge='start' className={classes.menuButton}> */}
                
              {/* </IconButton> */}
            {/* </Toolbar>
          </AppBar> */}
          <TimeTravel />
        </main>
      </FlureeProvider>
    </ThemeProvider>
  )
}

export default App
