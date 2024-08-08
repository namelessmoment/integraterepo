import { useState,useEffect } from "react";
import axios, { Axios } from "axios";
export default function RegisterFreelancer()
{
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        skills: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form data to the server
        // You can replace the below log with an API call to your backend
        axios.post("http://localhost:3000/employee",{formData}).then(
            (response) => {
                console.log(response.data);
            }
            ).catch((error) => {
                console.error(error);
            }
        )
        console.log('Form submitted:', formData);
      };
    return (
        <div>
        <h1>Register as a Freelancer</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label><br />
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor="email">Email:</label><br />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor="password">Password:</label><br />
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor="skills">Skills:</label><br />
            <textarea
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              rows="4"
              cols="50"
            />
          </div>
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    )
}