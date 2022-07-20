import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, loginOnly = true }) => {
  const [user] = useAuthState(auth);
  
  if(!user && loginOnly){
    return <Navigate to={'/signin'} />;
  }
  
  if(user && !loginOnly){
    return <Navigate to={'/'} />;
  }
  
  return children;
};

export default ProtectedRoute;