import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';

export default function RoutesMain() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}
