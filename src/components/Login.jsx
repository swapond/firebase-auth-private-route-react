import React, { useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init";
import { AuthContext } from "../providers/AuthProvider";

function Login() {
  const { signInUser } = useContext(AuthContext);
  console.log(signInUser);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMsg = error.code;
        console.error(errorMsg);
      });
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4">
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="p-3 rounded-md mt-2"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="p-3 rounded-md"
      />

      <input type="submit" value="Login" className="btn btn-primary" />
    </form>
  );
}

export default Login;
