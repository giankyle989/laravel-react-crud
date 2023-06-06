import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import Dashboard from "../views/Dashboard";

const GuestLayout = () => {
    const { user, token } = useStateContext();
    if (token) {
        return <Navigate to="/dashboard" />;
    }
    return (
        <>
            <Outlet />
        </>
    );
};

export default GuestLayout;
