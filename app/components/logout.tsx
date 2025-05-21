"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/login" })}
      style={{
        backgroundColor: "#5a66ff88",
        border: "none",
        borderRadius: 24,
        padding: "8px 18px",
        fontWeight: "600",
        color: "white",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        userSelect: "none",
      }}
      onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#4c56ff")}
      onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#5a66ff88")}
    >
      Logout
    </button>
  );
}
