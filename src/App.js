import themeObject from '@fluree/mui-theme';
import { FlureeConn, FlureeProvider } from '@fluree/react-wrapper';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core';
import React from 'react';
import './App.css';
import TimeTravel from './components/TimeTravel';

/**
 *  This function establishes a connection to the fluree webworker
 * You will need to create a new ledger on you Fluree instace named 
 * the same as the value in "ledger"
 */
const myconn = new FlureeConn({
  servers: "http://localhost:8090",
  ledger: "time/webinar",
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
          <TimeTravel />
        </main>
      </FlureeProvider>
    </ThemeProvider>
  )
}

export default App
