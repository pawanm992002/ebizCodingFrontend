import axios from "axios";

export default function Register() {
  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      
      const { data } = await axios.post(`http://localhost:8000/user/register`, {
        fname: formData.get("fname"),
        lname: formData.get("lname"),
        email: formData.get("email"),
        password: formData.get("password"),
        dob: formData.get("dob"),
        gender: formData.get("gender"),
      });

      if(data) {
        alert("Register successufully")
      }
      
    } catch (error) {
        alert(error.response.data.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleRegister}>
        <h2>Register</h2>
        <div>
          <label htmlFor="fname">First Name</label>
          <input type="text" name="fname" />
        </div>
        <div>
          <label htmlFor="lname">Last Name</label>
          <input type="text" name="lname" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" name="dob" />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
