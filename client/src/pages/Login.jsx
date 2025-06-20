import { useUser } from "@civic/auth/react";
import { useState } from "react";
import { BACKEND_URL } from "../App";
import { generateUsername } from 'friendly-username-generator';

export const Login = () => {
    const { user } = useUser();

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
            }

            catch (err) {
                console.log(err);
            }
        }

        else {
            console.log("Metamask doesn't exist!");
        }
    };

    return (
        <form onSubmit={handleMetaMaskLogin}>
            <button>Sign in to metamask</button>
        </form>
    );
};