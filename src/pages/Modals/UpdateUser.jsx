


import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
function UpdateUser(props) {
  console.log("user",props);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
const [id,setId] = useState("");
  const [items, setItems] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
 
  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedUser = { name, email };
        await axios.put(`http://127.0.0.1:8000/api/updateUser/${id}`,updatedUser)
        .then(response => {
          console.log(response);
          props.onUpdateSuccess();

          handleClose();
        })
        .catch(error => {
          console.log(error);
        });
    
  };
  return (
    <>
      <a href="#" className="update" onClick={handleShow}>
        Update
      </a>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
          <div className="mb-3">
              <label htmlFor="id" className="form-label">
                Id
              </label>
              <input
                type="text"
                className="form-control"
                name="id"
                defaultValue={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <textarea
                type="text"
                className="form-control"
                id="email"
                name="email"
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
              ></textarea>
            </div>
            <Button variant="secondary" onClick={handleClose}>
              Annuler
            </Button>
            <Button variant="primary" type="submit">
              Modifier
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}




export default UpdateUser;