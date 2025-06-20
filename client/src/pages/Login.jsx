import { useUser } from "@civic/auth/react";
import { useState } from "react";
import { BACKEND_URL } from "../App";
import { generateUsername } from 'friendly-username-generator';
import { Navigate, useNavigate } from "react-router-dom";

export const Login = () => {
    const { user, signOut } = useUser();
    const navigate = useNavigate();

    const handleMetaMaskLogin = async (e) => {
        e.preventDefault();

        if (window.ethereum) {
            try {
                const account = await window.ethereum.request({ method: "eth_requestAccounts" });


                const userName = generateUsername({
                    useHyphen: true,
                    useRandomNumber: true
                });

                const payload = {
                    userName,
                    email: user?.email,
                    walletId: account[0]
                };

                try {
                    const response = await fetch(`${BACKEND_URL}/login`, {
                        method: "POST",
                        headers: { 'Content-Type': 'application/json' },
                        credentials: "include",
                        body: JSON.stringify(payload)
                    });

                    console.log(response);
                }

                catch (err) {
                    console.log(err);
                }

                navigate("/");
            }

            catch (err) {
                console.log(err);
            }
        }

        else {
            console.log("Metamask doesn't exist!");
        }
    };

    const handleSignOut = () => {
        signOut();
        navigate("/");
    };

    return (
        <>
            <div className="w-full h-dvh flex items-center justify-center">
                <div className="h-[30vh] w-[30vw] border-emerald-800 border-4 rounded-4xl flex flex-col items-center justify-center bg-white">
                    <div className="flex items-center justify-center gap-2">
                        <h1 className="text-black text-[1.4vw]">Login via</h1>
                        <img src="https://1000logos.net/wp-content/uploads/2022/05/MetaMask-Logo.png" className="h-[6vw]" />
                    </div>
                    <button className="btn btn-primary w-2/6" onClick={handleMetaMaskLogin}>Connect Wallet</button>
                    <div className="divider text-gray-700">OR</div>
                    <button className="btn btn-error h-8" onClick={handleSignOut}>Logout</button>
                </div>
            </div>
        </>
        // <form onSubmit={handleMetaMaskLogin}>
        //     <button>Sign in to metamask</button>
        // </form>

    );
};