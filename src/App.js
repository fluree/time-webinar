import { FlureeConn, FlureeProvider } from '@fluree/react-wrapper';
import React from 'react';
import { makeStyles } from '@material-ui/core'
import './App.css';
import TimeTravel from './components/TimeTravel';

const myconn = new FlureeConn({
  servers: "http://localhost:8090",
  ledger: "time/webinar",
  workerUrl: "/flureeworker.js"
});

let useStyles = makeStyles((theme) => ({
	root: {
    flexGrow: 1,
    margin: '5vh 5vw'
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <header></header>
      <FlureeProvider conn={myconn}>
        <TimeTravel></TimeTravel>
      </FlureeProvider>
    </main>
  )
}

export default App
