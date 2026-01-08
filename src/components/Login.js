import { useState, useEffect } from "react";
export default function Login({ setUser, setIsSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 
  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  const login = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    const account = JSON.parse(localStorage.getItem("account"));
    if (!account) {
      alert("Please create an account first");
      return;
    }

    if (account.email === email && account.password === password) {
      localStorage.setItem("user", JSON.stringify(account));
      setUser(account);
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <h2>Welcome Back</h2>

        <input type="email" value={email} autoComplete="off" placeholder="Email" onChange={e => setEmail(e.target.value)}/>

        <input type="password" value={password} autoComplete="new-password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>

        <button onClick={login}>Login</button>

        <p> Don’t have an account?{" "}
          <span onClick={() => setIsSignup(true)}>Create</span>
        </p>
      </div>
    </div>
  );
}
