import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/providers/AuthContext";
import { setCookie, getCookie } from "@/lib/cookies";
import { encrypt, decrypt } from "@/lib/encription";
import { jwtDecode } from "jwt-decode";

import { mockPostUserLogin } from "@/mocks/login";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleLogin = () => {
    const token = mockPostUserLogin(username, password);
    setCookie("auth-token", encrypt(token));

    const decodedToken = jwtDecode(token);
    const { name, role } = { ...decodedToken };
    setUser({ name, role });
    alert("Login successful!");
    navigate("/");
  };

  return (
    <div className="min-h-screen w-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-semibold">
            Username
          </label>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
            placeholder="Enter username"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-semibold">
            Password
          </label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
            placeholder="Enter password"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
}
