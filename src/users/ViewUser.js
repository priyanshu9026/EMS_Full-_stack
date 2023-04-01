import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {

    const [user,setUser]=useState({
        name:"",
        username:"",
        email:""

    });
    const {id}=useParams();

    useEffect(()=>{

        loadUser();

    },[]);
    const loadUser = async ()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
    };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>
          <div className="card">
            <div className="card-header">
              Details of user id :
              <ul className="list-group list-group-flush">
                <li className="card-body d-flex flex-column" key={user.username}>
                  <b className='my-2'>Name</b>
                  <span className='customList'>{user.name}</span>
                </li>
                <li className="card-body d-flex flex-column">
                  <b>Username:</b>
                  <span className='customList'>{user.username}</span>

                </li>
                <li className="card-body d-flex flex-column">
                  <b>Email:</b>
                  <span className='customList'>{user.email}</span>

                
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
