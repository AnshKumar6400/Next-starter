"use client";

import { login } from "./actions";
import { useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Logging in..." : "Login"}
    </button>
  );
}

const LoginPage = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <div>
      <h1>Login Page</h1>
      {error && <p>{error}</p>}
      <form action={login}>
        <label>Email</label>
        <input type="email" name="email" placeholder="Email" />
        <label>Password</label>
        <input type="password" name="password" placeholder="Password" />
        <SubmitButton />
      </form>
    </div>
  );
};

export default LoginPage;