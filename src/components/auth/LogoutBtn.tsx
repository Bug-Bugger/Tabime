"use client";

import { useRouter } from "next/navigation";
import { GoogleSignOut } from "./action";

export default function LogoutBtn() {
    const router = useRouter();
    const handleLogout = async () => {
        try {
           await GoogleSignOut();

            // Redirect to the login page page after logout
            router.push("/login");
            
            window.location.reload();
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