"use client";

import { GoogleLogin } from "./action";

export default function LoginBtn() {
    const handleLogin = async () => {
        try {
            const response = await GoogleLogin();
            console.log("Login successful:", response);
        } catch (error) {
            console.error("Login failed:", error);
        }
    }

  return (
        <button
          className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={() => {
            handleLogin();
          }}
        >
          Login
        </button>
  );
}