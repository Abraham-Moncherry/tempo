"use server";

import { signIn, signOut } from "@/app/auth";

export const login = async () => {
    await signIn("google", { redirectTo: "/dashboard" })
};

export const loginWithEmail = async (email: string) => {
    await signIn("nodemailer", {
        email,
        redirect: false,
    });
};

export const logout = async () => {
    await signOut({ redirectTo: "/" })
};
