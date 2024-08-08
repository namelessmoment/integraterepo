import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/client/projectform.css';

const PostProjectQuery = () => {
  const [formData, setFormData] = useState({
    projectTitle: '',
    projectType: '',
    description: '',
    budget: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };                              

  const validate = () => {
    let tempErrors = {};
    tempErrors.projectTitle = formData.projectTitle ? "" : "This field is required.";
    tempErrors.projectType = formData.projectType ? "" : "This field is required.";
    tempErrors.description = formData.description ? "" : "This field is required.";
    tempErrors.budget = formData.budget ? "" : "This field is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Project Query Submitted Successfully!');
      // Add logic to handle form submission (e.g., API call)
    } else {
      alert('Please fill out all required fields.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Post a Project Query</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="projectTitle">Project Title</label>
          <input
            type="text"
            className="form-control"
            id="projectTitle"
            name="projectTitle"
            value={formData.projectTitle}
            onChange={handleChange}
          />
          {errors.projectTitle && <div className="text-danger">{errors.projectTitle}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="projectType">Project Type</label>
          <input
            type="text"
            className="form-control"
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
          />
          {errors.projectType && <div className="text-danger">{errors.projectType}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="5"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
          {errors.description && <div className="text-danger">{errors.description}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="budget">Budget</label>
          <input
            type="number"
            className="form-control"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
          />
          {errors.budget && <div className="text-danger">{errors.budget}</div>}
        </div>
        <button type="submit" className="btn btn-primary mt-3">Post</button>
      </form>
    </div>
  );
};

export default PostProjectQuery;
