"use client";

import { useActionState, useEffect } from "react";
import { loginAction } from "./loginAction";

const Login = () => {
  const [{ error, redirectTo }, formAction, isPending] = useActionState(
    loginAction,
    {
      error: "",
      redirectTo: undefined,
    },
  );

  useEffect(() => {
    if (redirectTo) {
      location.assign(redirectTo);
    }
  }, [redirectTo]);

  return (
    <form action={formAction}>
      <div>
        <label htmlFor="login">Логин: </label>
        <input type="text" required name="login" />
      </div>
      <div>
        <label htmlFor="password">Пароль: </label>
        <input type="password" name="password" required />
      </div>
      {error && <div style={{ color: "red" }}>Error: {error}</div>}
      <button disabled={isPending}>Login</button>
    </form>
  );
};
export default Login;
