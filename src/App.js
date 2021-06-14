import { FlureeConn, FlureeProvider } from '@fluree/react-wrapper';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import './App.css';
import TimeTravel from './components/TimeTravel';

const myconn = new FlureeConn({
  servers: "http://localhost:8090",
  ledger: "time/webinar2",
  workerUrl: "/flureeworker.js"
});

let useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '5vh 5vw'
  },
  header: {
    height: '10vh',
    backgroundColor: '#13C6FF'
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <header className={classes.header}></header>
      <main className={classes.root}>
        <FlureeProvider conn={myconn}>
          <TimeTravel></TimeTravel>
        </FlureeProvider>
      </main>
    </div>
  )
}

export default App
