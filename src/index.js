import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Login from "./containers/Login.jsx";
import Register from "./containers/Register.jsx";
import Profile from "./containers/Profile.jsx";
import Detail from "./containers/Detail.jsx";
import Watch from "./containers/Watch.jsx";
import ResetPassword from "./containers/ResetPassword";
import NotFound from "./containers/NotFound";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Series from "./containers/Series";
import Movies from "./containers/Movies";
import NewPopular from "./containers/NewPopular";
import MyList from "./containers/MyList";
import Search from "./containers/Search";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            // <ProtectedRoute>
              <App />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <ProtectedRoute loginOnly={false}>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedRoute loginOnly={false}>
              <Register />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reset-password"
          element={
            <ProtectedRoute loginOnly={false}>
              <ResetPassword />
            </ProtectedRoute>
          }
        />
        <Route path="/profile-selection" element={<Profile />} />
        <Route path="/tv-series" element={<Series />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/new-and-popular" element={<NewPopular />} />
        <Route path="/my-list" element={<MyList />} />
        <Route path="/search/:value" element={<Search />} />
        <Route
          path="/detail/:jenis/:id"
          element={
            <ProtectedRoute loginOnly={true}>
              <Detail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/watch/:jenis/:id"
          element={
            <ProtectedRoute loginOnly={true}>
              <Watch />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
