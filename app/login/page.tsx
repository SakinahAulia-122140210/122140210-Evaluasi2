"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import "./styles.css";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/");
    }
  }, [status, router]);

  return (
    <div className="login-container">
      <h1>Selamat Datang!</h1>
      <p>Masuk menggunakan akun Google untuk melanjutkan.</p>
      <button className="google-btn" onClick={() => signIn("google")}>
        <svg
          className="google-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
        >
          <path
            fill="#4285F4"
            d="M24 9.5c3.54 0 6.62 1.21 9.06 3.2l6.75-6.74C34.53 2.84 29.6 1 24 1 14.82 1 7.07 6.81 3.54 14.85l7.85 6.09C12.33 14.42 17.64 9.5 24 9.5z"
          />
          <path
            fill="#34A853"
            d="M46.49 24.13c0-1.53-.13-3-0.4-4.44H24v8.41h12.77c-0.56 3.03-2.26 5.62-4.86 7.38l7.88 6.12C43.92 34.1 46.49 29.55 46.49 24.13z"
          />
          <path
            fill="#FBBC05"
            d="M11.42 28.83a14.62 14.62 0 01-1.14-4.43c0-1.54.4-3 1.15-4.3l-7.9-6.08A23.77 23.77 0 001 24c0 3.82 1.03 7.38 2.86 10.47l7.56-5.64z"
          />
          <path
            fill="#EA4335"
            d="M24 46.5c5.61 0 10.6-1.85 14.13-5.02l-6.75-6.74c-2.07 1.38-4.72 2.21-7.38 2.21-6.31 0-11.64-4.92-12.58-11.44l-7.56 5.64C7.1 41.17 14.8 46.5 24 46.5z"
          />
        </svg>
        Login dengan Google
      </button>
    </div>
  );
}
