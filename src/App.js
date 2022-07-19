import { Route, Routes } from 'react-router-dom';
import Detail from './component/Detail';
import Home from './component/Home';
import Login from './component/Login';
import Profile from './component/Profile';
import Register from './component/Register';
import Watch from './component/Watch';

function App() {
  return (
    <>
      {/* <Navbar /> */}
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signin" element={<Login />}></Route>
      <Route path="/signup" element={<Register />}></Route>
      <Route path="/profile-selection" element={<Profile />}></Route>
      <Route path="/detail-movie/:id" element={<Detail />}></Route>
      <Route path="/watch-movie/:id" element={<Watch />}></Route>
    </Routes>
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Home /> */}
      {/* <Detail /> */}
      {/* <Profile /> */}
    </>
  );
}

export default App;
