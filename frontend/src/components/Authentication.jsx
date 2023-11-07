
import { useState, useEffect } from "react";
import "../style/components/authentication.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from "../server/api";
import { signIn } from "../server/tokenSlice";

export default function Authentication() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const rememberMeEmail = localStorage.getItem("rememberMeEmail");
    const rememberMePassword = localStorage.getItem("rememberMePassword");
    if (rememberMeEmail && rememberMePassword) {
      setEmail(rememberMeEmail);
      setPassword(rememberMePassword);
    }
  }, [])

  const connectionUser = (e) => {
    e.preventDefault()
    login(email, password)
    .then((token) => {
      dispatch(signIn(token));

      const rememberMe = document.getElementById("remember-me");
      if (rememberMe && rememberMe.checked) {
        localStorage.setItem("rememberMeEmail", email);
        localStorage.setItem("rememberMePassword", password);
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      }
     
      navigate("/user");
    })
    .catch((error) => {
      setError("Erreur lors de la connexion")
    });
  }

  

    return (
        
          <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={connectionUser}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label
            ><input type="text" id="username" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
              >Remember me</label
            >
          </div>
        {/* <Link to="/user"> */}
            <button type="submit"
                className="sign-in-button">
                Sign In
            </button>
            <div className="displayError">{error}</div>
        {/* </Link> */}
         
         
        </form>
      </section>
    </main>
        
      
    );
}
