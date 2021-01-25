import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { TiUserAdd } from "react-icons/ti";
import { Col, Row } from "react-bootstrap";
const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:5000/users");
    setUser(result.data.reverse());
  };

 

  return (
    <div className="container">
      <div className="py-4">
        <Row className="Container align-items-center  pt-3">
          <Col md={3}>
            <h1>All Users</h1>
          </Col>
          <Col md={8}>
            <table className="box__container float-right">
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Search"
                    className="search px-2"
                    style={{backgroundColor:"#E9E9E9"}}
                  />
                </td>
                <td className="px-3">
                  <a href="#">
                    <FiSearch style={{ color: "#a3a2a2" }} />
                  </a>
                </td>
              </tr>
            </table>
          </Col>
          <Col>
          <Link className="float-right" to="/users/add"><TiUserAdd style={{fontSize:"2rem"}}/></Link>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col className="mt-2">
        <table className="table table-borderless table-sm text-center">
          <thead className="users__th">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="users__tbody">
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  
                  <Link class="mr-2" to={`/users/edit/${user.id}`}>
                    <FiEdit />
                  </Link>
                  <Link to={`/users/delete/${user.id}`}>
                    <MdDelete />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
