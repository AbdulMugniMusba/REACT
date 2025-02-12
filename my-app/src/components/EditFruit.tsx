import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function EditFruit() {
  const API_URL = `https://67a97dd26e9548e44fc3c61b.mockapi.io/Fruits`;

  const { id } = useParams<{ id: string }>();
  // Get Fruit ID from URL
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [description, setDescription] = useState("");
  const [nameError, setnameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [message, setMessage] = useState("");

  const fetchFruit = async () => {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    console.log(data);
    
    setname(data.name);
    setDescription(data.description);
  };

  // Fetch Fruit details when component mounts
  useEffect(() => {
    fetchFruit();
  }, [id]);

  const isFormValid = (): boolean => {
    let validForm: boolean = true;
    if (name.trim() == "") {
      setnameError("name is required");
      validForm = false;
    } else {
      setnameError("");
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
      EditFruit();
      setMessage("");
    } else {
      setMessage("Please fix the Validation Error");
    }
  };

  const EditFruit = async () => {
    let requestBody = { name, description };
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
      console.log("Fruits Updated successfully");
      const data = await response.json();
      console.log(data);
      setname("");
      setDescription("");
      setMessage("Fruit Updated successfully");
      setTimeout(()=>navigate("/Fruits"),3000)
     
    }
  };

  return (
    <div>
      {message && <div className="alert alert-success">{message}</div>}
      <h1>Updated Fruits</h1>
      <form
        className="form-group mt-5 border p-5 shadow-lg rounded"
        onSubmit={handleSubmit}
      >
        <label htmlFor="nametextbox" className="text-secondary mb-3">
          Fruit name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          className="form-control mb-4"
          placeholder="Fruit name"
          onChange={(e) => setname(e.target.value)}
        />{" "}
        {nameError ? (
          <p className="text-danger small"> {nameError} </p>
        ) : (
          <p></p>
        )}
        <label htmlFor="descriptiontextbox" className="text-secondary mb-3">
          Fruit Description
        </label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          className="form-control mb-4"
          placeholder="Fruit description"
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
export default EditFruit;
