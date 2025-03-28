"use client";

import { redirect } from "next/dist/server/api-utils";
import { GoogleSignOut } from "./action";

export default function LogoutBtn() {
    const handleLogout = async () => {
        try {
            const response = await GoogleSignOut();
            console.log("Logout successful:", response);

            // redirect("/");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    }

  return (
        <button
          className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={() => {
            handleLogout();
          }}
        >
          Logout
        </button>
  );
}