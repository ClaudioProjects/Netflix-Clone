import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../pages/PrivateRoute';
import Home from '../pages/home';
import SearchGenre from '../pages/searchGenre';
import SearchQuery from '../pages/searchQuery';
import Login from '../pages/login';
import NotFound from '../pages/notFound';

export default function RoutesMain() {
  return (
    <Routes>
      <Route exact path="/" element={<PrivateRoute></PrivateRoute>}>
        <Route exact path="/" element={<Home />} />
      </Route>
      <Route exact path="/search/:movieOrTv/:id" element={<PrivateRoute></PrivateRoute>}>
        <Route exact path="/search/:movieOrTv/:id" element={<SearchGenre />} />
      </Route>
      <Route exact path="/search/:query" element={<PrivateRoute></PrivateRoute>}>
        <Route exact path="/search/:query" element={<SearchQuery />} />
      </Route>
      <Route exact path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
