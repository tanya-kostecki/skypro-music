import { Route, Routes } from "react-router-dom";
// import { Favourites } from "./pages/favourites";
// import { MainPage } from "./pages/main";

import { MainPage } from "./pages/main/MainPage";
import { NotFound } from "./pages/page-not-found";
// import { Category } from "./pages/categories";
import { ProtectedRoute } from './components/protected-route'
import { AuthPage } from "./pages/authorization/AuthPage";
import { useContext } from "react";
import { userContext } from "./context/userContext";
import { PageLayout } from './pages/main/PageLayout'
import { FavouritesPage } from './pages/favourites/FavouritesPage'
import { CategoryPage } from './pages/categories/CategoryPage'

export const AppRoutes = () => {
  const { token, setToken } = useContext(userContext)
  return (
    <Routes>
      <Route
        path="/login"
        element={<AuthPage setToken={setToken} isLoginMode={true} />}
      ></Route>
      <Route
        path="/register"
        element={<AuthPage setToken={setToken} isLoginMode={false} />}
      ></Route>

      <Route element={<PageLayout />}>
        <Route
          path="/"
          index
          element={
            <ProtectedRoute isAllowed={token}>
              <MainPage setToken={setToken} />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/favourites"
          element={
            <ProtectedRoute isAllowed={token}>
              <FavouritesPage setToken={setToken} />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/category/:id"
          element={
            <ProtectedRoute isAllowed={token}>
              <CategoryPage setToken={setToken} />
            </ProtectedRoute>
          }
        ></Route>
      </Route>

      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  )
}
