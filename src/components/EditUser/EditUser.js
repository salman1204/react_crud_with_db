import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import useApiRequest from '../../useApiRequest';


const EditUser = () => {
    const history = useHistory();
    const {id} = useParams();

    const [user, setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    })
 
    const {name, username, email, phone, website} = user;

    useEffect ( ()=>{
       loadUser()
    },[])
    
    const onInputChange = e => {
        setUser({...user, [e.target.name]: e.target.value});
    }

  
    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/users/${id}`, user)
        history.push("/");
    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:5000/users/${id}`);
        setUser(result.data);
      };


    return (
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Edit A User</h2>
          <form onSubmit={e => onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                required
                name="name"
                value={name}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Username"
                required
                name="username"
                value={username}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Your E-mail Address"
                required
                name="email"
                value={email}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Phone Number"
                required
                name="phone"
                value={phone}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Website Name"
                name="website"
                value={website}
                onChange={e => onInputChange(e)}
              />
            </div>
            <button className="btn btn-warning btn-block">Edit User</button>
          </form>
        </div>
      </div>
    );
};

export default EditUser;