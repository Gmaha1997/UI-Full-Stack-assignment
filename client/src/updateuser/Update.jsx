import React, { useEffect } from 'react';
import "./update.css";
import {Link, useNavigate, useParams} from "react-router-dom";
import { useState } from 'react';
import axios, { Axios } from 'axios';
import toast from "react-hot-toast";

const UpdateUser = () => {
    const users = {
        name: "",
        email:"",
        address:"",
    };
    const [user, setUser] = useState(users);
    const navigate = useNavigate();
    const {id} = useParams();

    const inputHandler = (e) => {
        const {name, value} = e.target;
        console.log(name, value);


        setUser({...user, [name]:value});
    };
    useEffect (()=> {
        axios.get(`http://localhost:7000/api/users/${id}`)
        .then((response) => {
            setUser(response.data)

        })
        .catch((error)=>{

            console.log(error);
        })
    }, [id] );



    const submitForm = async(e) => {
        e.preventDefault();
        await axios
        .put("http://localhost:7000/api/update/user/${id}", user).then( (response) =>{
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
        <h3>Update File </h3>
        <form className="addUserForm" onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor= "name">Name:</label>
                <input 
                type="text"
                id="name"
                value = {user.name}
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
                value = {user.email}
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
                value = {user.address}
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

export default UpdateUser;