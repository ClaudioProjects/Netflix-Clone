import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  console.log(localStorage.getItem('valid'));
  if (!localStorage.getItem('valid')) return <Navigate to={'/login'} replace></Navigate>;
  return <Outlet />;
}
