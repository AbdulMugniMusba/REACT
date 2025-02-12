import React, { useState } from "react";

function AddCourse() {
    const API_URL = "https://67a97dd26e9548e44fc3c61b.mockapi.io/Courses";
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [titleError, setTitleError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [message, setMessage] = useState("");
    

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
            adduser();
            setMessage("");
        } else {
            setMessage("Please fix the Validation Error");
        }
    };

    const adduser = async () => {
        let requestBody = { title, description };
        let requestBodyJson = JSON.stringify(requestBody);

        const request = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: requestBodyJson,
        };

        const response = await fetch(API_URL, request);
        if (response.ok) {
            console.log("course added successfully");
            const data = await response.json();
            console.log(data);
            setTitle("");
            setDescription("");
            setMessage("Course added successfully");

        }
    };      

    return (
        <div>
            {message && 
            <div className="alert alert-success">{message}</div>
            }   
            <h1>Add Courses</h1>
            <form className="form-group mt-5 border p-5 shadow-lg rounded" onSubmit={handleSubmit}> 
                <label htmlFor="titletextbox" className="text-secondary mb-3">TITLE</label>
            <input type="text"  
                name="title"
                    id="title"
                value={title}
                className="form-control mb-4"
                placeholder="title"
                    onChange={(e) => setTitle(e.target.value)}
                /> {titleError ? (
                    <p className="text-danger small"> {titleError} </p>
                  ) : (
                    <p></p>
                  )}



                <label htmlFor="descriptiontextbox" className="text-secondary mb-3">DESCRIPTION</label>
            <input type="text"
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
                <button type="submit" className="btn btn-primary">Add Course</button>
            </form>
            </div>)
            
}export default AddCourse;