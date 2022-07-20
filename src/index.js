import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './containers/Login.jsx';
import Register from './containers/Register.jsx';
import Profile from './containers/Profile.jsx';
import Detail from './containers/Detail.jsx';
import Watch from './containers/Watch.jsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <App />
          </ProtectedRoute>
        }/>
        <Route path="/signin" element={
          <ProtectedRoute loginOnly={false}>
            <Login />
          </ProtectedRoute>
        }/>
        <Route path="/signup" element={
          <ProtectedRoute loginOnly={false}>
            <Register />
          </ProtectedRoute>
        }/>
        <Route path="/profile-selection" element={<Profile />} />
        <Route path="/detail-movie/:id" element={<Detail />} />
        <Route path="/watch-movie/:id" element={<Watch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
