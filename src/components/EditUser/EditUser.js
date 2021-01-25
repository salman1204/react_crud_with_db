import React, { useEffect, useState } from "react";
import "./Edit.css";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import useApiRequest from "../../useApiRequest";
import { Row, Col, Image, Container } from "react-bootstrap";

const EditUser = () => {
  const history = useHistory();
  const { id } = useParams();
  

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website } = user;

  useEffect(() => {
    loadUser();
  }, []);

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/users/${id}`, user); 
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:5000/users/${id}`);
    setUser(result.data);
  };

  return (
    <Container>
      
   <Row>
      <h1>User Information</h1>
   </Row>
  <Row>
    <Col sm={4} style={{backgroundColor:"#e9e9e9"}} className="d-flex">
    <Image className="m-auto" src="https://img.icons8.com/bubbles/100/000000/user.png" roundedCircle/>
    </Col>
    <Col sm={8}>
    <form onSubmit={e => onSubmit(e)}>
    
            <div className="form-row mb-3">
            <label class="col-sm-4 col-form-label" for="name">Name</label>
              <input
                type="text"
                className="form-control col-sm-8"
                placeholder="Enter Your Name"
                required
                name="name"
                value={name}
                contenteditable="false"
                onChange={e => onInputChange(e)}
              />
            </div>
           
            <div className="form-row mb-3">
            <label class="col-sm-4 col-form-label" for="name">User Name</label>
              <input
                type="text"
                className="form-control col-sm-8"
                placeholder="Enter Your Username"
                required
                name="username"
                value={username}
                onChange={e => onInputChange(e)}
              />
            </div>

            <div className="form-row mb-3">
            <label class="col-sm-4 col-form-label" for="name">Email</label>
              <input
                type="email"
                className="form-control col-sm-8"
                placeholder="Enter Your E-mail Address"
                required
                name="email"
                value={email}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-row mb-3">
            <label class="col-sm-4 col-form-label" for="name">Phone</label>
              <input
                type="text"
                className="form-control col-sm-8"
                placeholder="Enter Your Phone Number"
                required
                name="phone"
                value={phone}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-row mb-3">
            <label class="col-sm-4 col-form-label" for="name">Website</label>
              <input
                type="text"
                className="form-control col-sm-8"
                placeholder="Enter Your Website Name"
                name="website"
                value={website}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="d-flex justify-content-end mt-5">
            <button className="btn btn-outline-warning btn-block w-25">Update User</button>
            </div>
            
          </form>
    </Col>
  </Row>    
   </Container>
  );
};

export default EditUser;
