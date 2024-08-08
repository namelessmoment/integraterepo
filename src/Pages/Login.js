import React from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState("client"); // Default to client
  const navigate = useNavigate();

  async function loginFunc(e) {
    e.preventDefault(); // Prevent form from submitting the default way
    console.log("Login button clicked");

    if (role === "freelancer") {
      try {
        const response = await fetch("http://localhost:8080/freelancers/freelancerLogin", { // Adjust the URL based on your backend setup
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: username, password }), // Use 'email' instead of 'username' to match API
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Login successful:", data);
          // Save the response in session storage
          sessionStorage.setItem("freelancerData", JSON.stringify(data));
          navigate("/freelancer");
        } else {
          console.log("Invalid credentials");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      // Static login data for client (or you can implement similar API call for client login)
      try {
        const response = await fetch("http://localhost:8080/users/userLogin", { // Adjust the URL based on your backend setup
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: username, password }), // Use 'email' instead of 'username' to match API
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Login successful:", data);
          // Save the response in session storage
          sessionStorage.setItem("clientData", JSON.stringify(data));
          navigate("/clientpage");
        } else {
          console.log("Invalid credentials");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  }

  return (
    <div>
      <div className="login">
        <div className="login-container">
          <h2>LanceStack</h2>
          <form onSubmit={loginFunc}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="role-selection">
              <label>
                <input
                  type="radio"
                  value="client"
                  checked={role === "client"}
                  onChange={(e) => setRole(e.target.value)}
                />
                Client
              </label>
              <label>
                <input
                  type="radio"
                  value="freelancer"
                  checked={role === "freelancer"}
                  onChange={(e) => setRole(e.target.value)}
                />
                Freelancer
              </label>
            </div>

            <button type="submit">Login</button>
          </form>
          <div className="footer">
            <p>
              Don't have an account? <a href="/signup">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}