import React from "react";
import axios from "axios";
import { Link, useParams, useHistory } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

const Delete = () => {
  const { id } = useParams();
  const history = useHistory();

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/users/${id}`);
    history.push("/");
  };
  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Link to="/">
            <Button className="mr-2" variant="info">
              Cancel
            </Button>
            <Button onClick={() => deleteUser(id)} variant="danger">
              Delete
            </Button>
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default Delete;
