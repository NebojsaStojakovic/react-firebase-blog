import "./style.scss";
import "./media-query.css";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Detail from "./pages/Detail";
import { useEffect, useState } from "react";
import Auth from "./pages/Auth";
import AddEditBlog from "./pages/AddEditBlog";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Header from "./components/Header";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

const App = () => {
  const [user, setUser] = useState(null);
  const [active, setActive] = useState("home");

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setActive("login");
      navigate("/auth");
    });
  };
  return (
    <div className='App'>
      <Header
        active={active}
        setActive={setActive}
        user={user}
        handleLogout={handleLogout}
      />
      <ToastContainer position='top-center' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route
          path='/create'
          element={
            user?.uid ? <AddEditBlog user={user} /> : <Navigate to='/' />
          }
        />
        <Route
          path='/update/:id'
          element={
            user?.uid ? (
              <AddEditBlog user={user} setActive={setActive} />
            ) : (
              <Navigate to='/' />
            )
          }
        />
        <Route path='/about' element={<About />} />
        <Route
          path='/auth'
          element={<Auth setActive={setActive} setUser={setUser} />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
