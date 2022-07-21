import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, loginOnly = true }) => {
  const [user, isLoading] = useAuthState(auth);
  
  if(!user && loginOnly){
    return <Navigate to={'/signin'} />;
  }
  
  if(user && !loginOnly){
    return <Navigate to={'/'} />;
  }
  
  return isLoading ? <div className="flex items-center justify-center absolute top-[50%] w-full z-10 space-x-2 animate-pulse"><div className="w-4 h-4 bg-red-600 rounded-full"></div><div className="w-4 h-4 bg-red-600 rounded-full"></div><div className="w-4 h-4 bg-red-600 rounded-full"></div></div> : children;
};

export default ProtectedRoute;