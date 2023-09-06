import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Favourites } from "./pages/favourites";
import { MainPage } from "./pages/main";
import { NotFound } from "./pages/page-not-found";
import { Category } from "./pages/categories";
import { ProtectedRoute } from './components/protected-route'

export const AppRoutes = ({ token, setToken }) => {
  return (
    <Routes>
      <Route path="/login" element={<Login setToken={setToken}/>}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route
        path="/"
        element={
          <ProtectedRoute isAllowed={token}>
            <MainPage setToken={setToken}/>
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/favourites"
        element={
          <ProtectedRoute isAllowed={token}>
            <Favourites setToken={setToken}/>
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/category/:id"
        element={
          <ProtectedRoute isAllowed={token}>
            <Category setToken={setToken}/>
          </ProtectedRoute>
        }
      ></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  )
}