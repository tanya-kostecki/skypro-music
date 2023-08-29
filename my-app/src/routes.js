import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Favourites } from "./pages/favourites";
import { MainPage } from "./pages/main";
import { NotFound } from "./pages/page-not-found";
import { Category } from "./pages/categories";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/favourites" element={<Favourites />}></Route>
            <Route path="/category/:id" element={<Category />}></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
    )
}