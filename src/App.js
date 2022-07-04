import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// eslint-disable-next-line import/no-named-as-default
import RoutesMain from './routes';

function App() {
  return (
    <Router>
      {console.log((60 * 100) / 1500)}
      <RoutesMain></RoutesMain>
    </Router>
  );
}

export default App;
