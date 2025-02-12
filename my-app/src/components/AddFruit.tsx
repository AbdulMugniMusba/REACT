import React, { useState,} from "react";
import { useNavigate } from "react-router-dom";

function AddFruit() {
    const API_URL = "https://67a97dd26e9548e44fc3c61b.mockapi.io/Fruits";
    const [name, setname] = useState("");
    const [description, setDescription] = useState("");
    const [nameError, setnameError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    

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
            adduser();
            setMessage("");
        } else {
            setMessage("Please fix the Validation Error");
        }
    };

    const adduser = async () => {
        let requestBody = { name, description };
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
            console.log("Fruit added successfully");
            const data = await response.json();
            console.log(data);
            setname("");
            setDescription("");
            setMessage("Fruit added successfully");
            setTimeout(()=>navigate("/Fruits"),3000)
     

        }
    };      

    return (
        <div>
            {message && 
            <div className="alert alert-success">{message}</div>
            }   
            <h1>Add Fruits</h1>
            <form className="form-group mt-5 border p-5 shadow-lg rounded" onSubmit={handleSubmit}> 
                <label htmlFor="nametextbox" className="text-secondary mb-3">Fruit Name</label>
            <input type="text"  
                name="name"
                    id="name"
                value={name}
                className="form-control mb-4"
                placeholder="Fruit name"
                    onChange={(e) => setname(e.target.value)}
                /> {nameError ? (
                    <p className="text-danger small"> {nameError} </p>
                  ) : (
                    <p></p>
                  )}



                <label htmlFor="descriptiontextbox" className="text-secondary mb-3">Fruit Description</label>
            <input type="text"
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
                <button type="submit" className="btn btn-primary">Add Fruit</button>
            </form>
            </div>)
            
}export default AddFruit;