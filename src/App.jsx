import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import { useSelector } from "react-redux";
import NewBooking from "./pages/dashboard/NewBooking";
import Vendors from "./pages/dashboard/Vendors";

function App() {
  
  const token = useSelector((state) => state.user.token)

  return (
    <Routes>
      <Route path="/dashboard/*" element={token != null ?  <Dashboard /> : <Navigate to="/login" />} />
      <Route
          path="/login"
          element={token  ? <Navigate to="/dashboard/home" /> : <Login />}
        />
        <Route
          path="/register"
          element={token != null ? <Navigate to="/dashboard/home" /> : <Register />}
        />
           <Route
          path="/"
          element={token ? <Navigate to="/dashboard/home" /> : <Navigate to="/login" />}
        />
    </Routes>
  );
}

export default App;
