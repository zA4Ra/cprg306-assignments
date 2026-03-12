"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="flex flex-col items-center p-10 gap-4">
      <h1 className="text-3xl font-bold">Week 8</h1>

      {!user ? (
        <button
          onClick={gitHubSignIn}
          className="bg-black text-white px-4 py-2 rounded underline"
        >
          Login with GitHub
        </button>
      ) : (
        <>
          <p>Welcome {user.displayName}!</p>
          <p>EMAIL:{user.email}</p>

          <button
            onClick={firebaseSignOut}
            className="bg-red-500 text-white px-4 py-2 rounded underline"
          >
            Logout
          </button>

          <Link href="/week-8/shopping-list" className="text-blue-500 underline">
            Go to Shopping List
          </Link>
         
        </>
      )}
    </main>
  );
}