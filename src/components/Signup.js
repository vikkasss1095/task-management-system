import { useState, useEffect } from "react";

export default function Signup({ setIsSignup }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  useEffect(() => {
    setName("");
    setEmail("");
    setPassword("");
  }, []);

  const signup = () => {
    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    localStorage.setItem(
      "account",
      JSON.stringify({ name, email, password })
    );

    alert("Account created successfully. Please login.");
    setIsSignup(false);
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <h2>Create Account</h2>

        <input type="text" value={name} autoComplete="off" placeholder="Name" onChange={e => setName(e.target.value)}/>

        <input type="email" value={email} autoComplete="off" placeholder="Email" onChange={e => setEmail(e.target.value)}/>

        <input type="password" value={password} autoComplete="new-password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>

        <button onClick={signup}>Signup</button>

        <p> Already have account?{" "}
          <span onClick={() => setIsSignup(false)}>Login</span>
        </p>
      </div>
    </div>
  );
}
