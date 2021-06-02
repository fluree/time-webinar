import React from 'react'
import logo from './logo.svg';
import './App.css';
import { FlureeConn, FlureeProvider, useFlureeQuery } from '@fluree/react-wrapper';

const myconn = new FlureeConn({
  servers: "http://localhost:8090",
  ledger: "time/webinar",
  workerUrl: "/flureeworker.js"
});

const query = {
  select: [
    "*"
  ],
  from: "_collection"
}

function ShowCollections(){
  const data = useFlureeQuery(query);
  const { result, loading } = data;
  if (loading) {
    return (<div>Loading....</div>);
  } else {
  return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Doc</th>
              <th>Version</th>
            </tr>
          </thead>
          <tbody>
            {result.map(collection => (
              <tr key={collection._id}>
                <td>{collection._id}</td>
                <td>{collection.name}</td>
                <td>{collection.doc}</td>
                <td>{collection.version}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
  };
}

const App = () => {
  // return <ExampleComponent text="Create React Library Example 😄" />
  return (
    <FlureeProvider conn={myconn}>
      <ShowCollections />
    </FlureeProvider>
  )
}

export default App
