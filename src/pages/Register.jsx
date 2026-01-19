import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate()
  const [name, setName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const birthYear = new Date(birthDate).getFullYear();
    const age = new Date().getFullYear() - birthYear;

    if (!idNumber) {
      setMessage("ת.ז. חובה!");
      return;
    }

    if (!name) {
      setMessage("שם חובה!");
      return;
    }

    if (!validateEmail(email)) {
      setMessage("אימייל לא חוקי!");
      return;
    }

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
    navigate('/')
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>הרשמה</h2>
      <input placeholder="ת.ז." value={idNumber} onChange={e => setIdNumber(e.target.value)} />
      <input placeholder="שם" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="אימייל" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="date" placeholder="תאריך לידה" value={birthDate} onChange={e => setBirthDate(e.target.value)} />
      <input placeholder="פלאפון" value={phone} onChange={e => setPhone(e.target.value)} />
      <input type="password" placeholder="סיסמא" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">הרשמה</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default Register;
