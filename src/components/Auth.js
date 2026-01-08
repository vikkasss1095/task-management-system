import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

export default function Auth({ setUser }) {
  const [isSignup, setIsSignup] = useState(false);

  return isSignup
    ? <Signup setIsSignup={setIsSignup} />
    : <Login setUser={setUser} setIsSignup={setIsSignup} />;
}
