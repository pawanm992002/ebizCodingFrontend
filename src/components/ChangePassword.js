import React, { useState } from "react";
import axios from "axios";

export default function ForgetPassword() {
  const [oldPass, setOldPassword] = useState("");
  const [newPass, setNewPassword] = useState("");
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post(
        `http://localhost:8000/user/change-password`,
        {
          oldPassword: oldPass,
          newPassword: newPass,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (data) {
        alert("forget password successufully");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      <h2> Change Password </h2>
      <div>
        <label htmlFor="oldPassword"> Old Password </label>
        <input
          type="text"
          name="oldPassword"
          value={oldPass}
          onChange={(e) => setOldPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="newPassword"> Old Password </label>
        <input
          type="text"
          name="newPassword"
          value={newPass}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </div>
  );
}
