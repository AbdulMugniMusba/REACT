import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function EditCourse() {
  const API_URL = `https://67a97dd26e9548e44fc3c61b.mockapi.io/Courses`;

  const { id } = useParams<{ id: string }>();
  // Get course ID from URL
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [message, setMessage] = useState("");

  const fetchCourse = async () => {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    console.log(data);
    
    setTitle(data.title);
    setDescription(data.description);
  };

  // Fetch course details when component mounts
  useEffect(() => {
    fetchCourse();
  }, [id]);

  const isFormValid = (): boolean => {
    let validForm: boolean = true;
    if (title.trim() == "") {
      setTitleError("Title is required");
      validForm = false;
    } else {
      setTitleError("");
    }
    if (description.trim() == "") {
      setDescriptionError("Description is required");
      validForm = false;
    } else {
      setDescriptionError("");
    }
    return validForm;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      editCourse();
      setMessage("");
    } else {
      setMessage("Please fix the Validation Error");
    }
  };

  const editCourse = async () => {
    let requestBody = { title, description };
    let requestBodyJson = JSON.stringify(requestBody);

    const request = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBodyJson,
    };

    const response = await fetch(`${API_URL}/${id}`, request);
    if (response.ok) {
      console.log("Courses Updated successfully");
      const data = await response.json();
      console.log(data);
      setTitle("");
      setDescription("");
      setMessage("Course Updated successfully");
      setTimeout(()=>navigate("/courses"),5000)
     
    }
  };

  return (
    <div>
      {message && <div className="alert alert-success">{message}</div>}
      <h1>Update Fruit</h1>
      <form
        className="form-group mt-5 border p-5 shadow-lg rounded"
        onSubmit={handleSubmit}
      >
        <label htmlFor="titletextbox" className="text-secondary mb-3">
          TITLE
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          className="form-control mb-4"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />{" "}
        {titleError ? (
          <p className="text-danger small"> {titleError} </p>
        ) : (
          <p></p>
        )}
        <label htmlFor="descriptiontextbox" className="text-secondary mb-3">
          DESCRIPTION
        </label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          className="form-control mb-4"
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        {descriptionError ? (
          <p className="text-danger small"> {descriptionError} </p>
        ) : (
          <p></p>
        )}
        <button type="submit" className="btn btn-primary">
          Update 
        </button>
        <Link to="/" className="btn btn-secondary ms-2">
          Cancel
        </Link>
        
      </form>
    </div>
  );
}
export default EditCourse;
