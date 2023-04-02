


import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
function UpdateCat(props) {
  console.log("categorie",props);
  const [show, setShow] = useState(false);
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");

  const [items, setItems] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
 
  const handleSubmit = async (event) => {
    event.preventDefault();
 
    let newItem = { nom, description,id };
    setItems(newItem);
    console.log("items",items);
    await axios.put(`http://127.0.0.1:8000/api/updateCat/${id}`,items)
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
          <Modal.Title>Modifier une catégorie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
          <div className="mb-3">
              <label htmlFor="nom" className="form-label">
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
              <label htmlFor="nom" className="form-label">
                Nom
              </label>
              <input
                type="text"
                className="form-control"
                name="nom"
                defaultValue={nom}
                onChange={(e) => setNom(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                type="text"
                className="form-control"
                id="description"
                name="description"
                defaultValue={description}
                onChange={(e) => setDescription(e.target.value)}
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




export default UpdateCat;