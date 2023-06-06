import React from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="h-screen flex flex-col justify-center items-center">
                <h2>Welcome to our website!</h2>
                <div className="flex gap-x-4 p-4">
                    <button
                        className="bg-sky-400 p-2 text-white rounded-md hover:bg-sky-600 active:bg-sky-800"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>
                    <button
                        className="border-2 border-sky-400 p-2 rounded-md hover:bg-slate-200 active:bg-slate-400"
                        onClick={() => navigate("/register")}
                    >
                        Register
                    </button>
                </div>
            </div>
        </>
    );
};

export default Index;
