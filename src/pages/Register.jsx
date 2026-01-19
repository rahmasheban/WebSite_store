import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!idNumber || !name || !email || !birthDate || !phone || !password) {
      setMessage("כל השדות חובה!");
      return;
    }

    if (!validateEmail(email)) {
      setMessage("אימייל לא חוקי!");
      return;
    }

    const birthYear = new Date(birthDate).getFullYear();
    const age = new Date().getFullYear() - birthYear;

    if (age < 21) {
      setMessage("גיל חייב להיות מעל 21!");
      return;
    }

    if (!/^05\d{8}$/.test(phone)) {
      setMessage("מספר פלאפון לא חוקי!");
      return;
    }

    if (password.length < 8) {
      setMessage("סיסמא חייבת להיות לפחות 8 תווים!");
      return;
    }

    setMessage("הרשמה הצליחה! ✅");
    navigate("/");
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>הרשמה</h2>

        <input
          placeholder="ת.ז."
          value={idNumber}
          onChange={(e) => setIdNumber(e.target.value)}
        />

        <input
          placeholder="שם מלא"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="אימייל"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />

        <input
          placeholder="פלאפון"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="password"
          placeholder="סיסמא"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">הרשמה</button>

        {message && <p className="auth-message">{message}</p>}
      </form>
    </div>
  );
}

export default Register;
