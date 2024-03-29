import React, { useState } from "react";
import axios from "axios";
import "./register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://fronted-f8ne.onrender.com/api/auth/register",
        formData
      );
      navigate("/login");
      console.log("Registration successful:", response.data);

      // You can handle success, e.g., redirect the user to a login page.
    } catch (error) {
      console.error("Registration error:", error);
      // Handle registration error, e.g., display an error message to the user.
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          value={formData.username}
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          className="lInput"
        />
        <button className="lButton" onClick={handleSubmit}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
