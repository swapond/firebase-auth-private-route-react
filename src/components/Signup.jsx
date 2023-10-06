import React, { useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init";
import { AuthContext } from "../providers/AuthProvider";

function Signup() {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Create user in firebase
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.error(errorCode);
      });
  };
  return (
    <form onSubmit={handleSignUp} className="flex flex-col gap-4">
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

      <input type="submit" value="Signup" className="btn btn-primary" />
    </form>
  );
}

export default Signup;
