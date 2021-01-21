import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const View = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        webiste: ""
      });
      const { id } = useParams();
      useEffect(() => {
        loadUser();
      }, []);
      const loadUser = async () => {
        const res = await axios.get(`http://localhost:5000/users/${id}`);
        setUser(res.data);
      };
      return (
        <div className="container py-4">
          <Link className="btn btn-primary" to="/">
            back to Home
          </Link>
          <h1 className="display-4">User Id: {id}</h1>
          <hr />
          <ul className="list-group w-50">
            <li className="list-group-item">name: {user.name}</li>
            <li className="list-group-item">user name: {user.username}</li>
            <li className="list-group-item">email: {user.email}</li>
            <li className="list-group-item">phone: {user.phone}</li>
            <li className="list-group-item">website: {user.website}</li>
          </ul>
        </div>
      );
};

export default View;