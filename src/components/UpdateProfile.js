import axios from "axios";

export default function UpdateProfile() {
  const token = localStorage.getItem("token");
  const handleUpdateProfile = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);

      const { data } = await axios.post(
        `http://localhost:8000/user/update-profile`,
        {
          fname: formData.get("fname"),
          lname: formData.get("lname"),
          dob: formData.get("dob"),
          gender: formData.get("gender"),
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (data) {
        alert("Updated successufully");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleUpdateProfile}>
        <h2>Update Profile</h2>
        <div>
          <label htmlFor="fname">First Name</label>
          <input type="text" name="fname" />
        </div>
        <div>
          <label htmlFor="lname">Last Name</label>
          <input type="text" name="lname" />
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
