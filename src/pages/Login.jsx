import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

    if (!email || !password) {
      setMessage("אימייל וסיסמא חובה!");
      return;
    }

    if (!validateEmail(email)) {
      setMessage("אימייל לא חוקי!");
      return;
    }

    if (password.length < 8) {
      setMessage("סיסמא חייבת להיות לפחות 8 תווים!");
      return;
    }

    login({ email, password });
    setMessage("התחברות הצליחה! ✅");
    navigate("/");
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2 >התחברות</h2>

        <input
          type="email"
          placeholder="אימייל"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="סיסמא"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">התחברות</button>

        <button
          type="button"
          className="secondary-btn"
          onClick={() => navigate("/register")}
        >
          הרשמה
        </button>

        {message && <p className="auth-message">{message}</p>}
      </form>
    </div>
  );
}

export default Login;
