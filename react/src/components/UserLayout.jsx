import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { Navigate } from "react-router-dom";

const UserLayout = () => {
    const { user, token } = useStateContext();

    if (!token) {
        return <Navigate to="/login" />;
    }

    const onLogout = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="flex">
                <aside className="w-[240px] bg-sky-500 p-4">
                    <Link className="block" to="/dashboard">
                        Dashboard
                    </Link>
                    <Link to="/users">Users</Link>
                </aside>
                <div id="content" className="flex-1">
                    <header className="h-[80px] px-8 py-12 bg-red-200 flex justify-between items-center">
                        <div>Header</div>
                        <div>
                            {user.name}
                            <a href="#" onClick={onLogout}>
                                {" "}
                                Logout
                            </a>
                        </div>
                    </header>
                    <main className="h-screen p-8">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
};

export default UserLayout;
