import { useState } from "react";
import "../../styles/client/clientpage.css"
import Navigation from "../../components/Navigation";

export default function ClientProfile() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
      });
    
      const [errors, setErrors] = useState({});
    
      // Handle input change
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      // Basic validation
      const validate = () => {
        let tempErrors = {};
        let isValid = true;
    
        if (!formData.name) {
          tempErrors.name = 'Name is required';
          isValid = false;
        }
    
        if (!formData.email) {
          tempErrors.email = 'Email is required';
          isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          tempErrors.email = 'Email is invalid';
          isValid = false;
        }
    
        if (!formData.phone) {
          tempErrors.phone = 'Phone number is required';
          isValid = false;
        } else if (!/^\d{10}$/.test(formData.phone)) {
          tempErrors.phone = 'Phone number is invalid';
          isValid = false;
        }
    
        setErrors(tempErrors);
        return isValid;
      };
    
      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
          // Here, you can send the data to the backend server to update the client details
          console.log('Form data submitted:', formData);
          alert('Profile updated successfully!');
          // Reset the form if necessary
          setFormData({ name: '', email: '', phone: '' });
        }
      };
  return (
     <div>
     <Navigation/>
    <div className="clientprofile">
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-danger">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-danger">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="text-danger">{errors.phone}</p>}
        </div>

        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
    </div>
  );
}
