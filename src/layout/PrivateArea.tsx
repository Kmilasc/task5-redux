import { Navigate, Outlet } from "react-router-dom";

export function PrivateArea(): JSX.Element {
    const token = localStorage.getItem('token');

    if(token) {
        return <Outlet />
    }

    return <Navigate to={'/'} />
}