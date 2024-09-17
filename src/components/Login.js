import axios from "axios";

export default function Register() {
    const handleLogin = async (e) => {
        try {
          e.preventDefault();
          const formData = new FormData(e.target);
          
          const { data } = await axios.post(`http://localhost:8000/user/login`, {
            email: formData.get("email"),
            password: formData.get("password"),
          });
    
          if(data?.user) {
            localStorage.setItem("userInfo", data.user);
            localStorage.setItem("token", data.token);
            alert("login successufully")
          }
        } catch (error) {
            alert(error.response.data.message);
        }
      };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
