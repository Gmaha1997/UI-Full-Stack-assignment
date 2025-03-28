import React from 'react';
import "./adduser.css";
import {Link, useNavigate} from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";

const AddUser = () => {
    const users = {
        name: "",
        email:"",
        address:"",
    };
    const [user, setUser] = useState(users);
    const navigate = useNavigate();

    const inputHandler = (e) => {
        const {name, value} = e.target;
        console.log(name, value);


        setUser({...user, [name]:value});
    };

    const submitForm = async(e) => {
        e.preventDefault();
        await axios
        .post("http://localhost:7000/api/user", user).then( (response) =>{
            //console.log("User created successfullly");
            toast.success(response.data.message,{position: "top-right"})
            navigate("/");
        })

        .catch((error)=> {
            console.log(error)
        })

    };
  return (
    <div className="addUser">
        <Link  to="/" type="button" class="btn btn-warning"><i class="fa-solid fa-backward"></i> Back</Link>
        <h3>Add New File </h3>
        <form className="addUserForm" onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor= "name">Name:</label>
                <input 
                type="text"
                id="name"
                onChange={inputHandler}

                name="name"
                autoComplete="off"
                placeholder="Add your File"
                />
                
            </div>
            <div className="inputGroup">
                <label htmlFor= "email">Email:</label>
                <input 
                type="email"
                id="email"
                onChange={inputHandler}
                name="email"
                autoComplete="off"
                placeholder="Add email"
                />
                
            </div>
            <div className="inputGroup">
                <label htmlFor= "address">Address:</label>
                <input 
                type="address"
                id="address"
                onChange={inputHandler}
                name="address"
                autoComplete="off"
                placeholder="Add address"
                />

                <div className="inputGroup">
                <button type="Submit" class="btn btn-success">Submit File</button>
                </div>
                
            </div>

        </form>

    </div>
    
  )
}

export default AddUser;