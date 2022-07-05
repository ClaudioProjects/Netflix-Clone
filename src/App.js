import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// eslint-disable-next-line import/no-named-as-default
import RoutesMain from './routes';

function App() {
  return (
    <Router>
      <RoutesMain></RoutesMain>
    </Router>
  );
}

export default App;
