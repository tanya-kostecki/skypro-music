import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ redirectPath="/login", token }) => {
    if(!token) {
        return <Navigate to={redirectPath} replace={true}></Navigate>
    }

    return <Outlet />
}