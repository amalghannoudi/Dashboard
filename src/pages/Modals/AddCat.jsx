


import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddCat(props) {
  const [show, setShow] = useState(false);
const [nom, setNom] = useState("");
const [description, setDescription] = useState("");
const [items, setItems] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
   
    let newItem = { nom, description };
  setItems(newItem);
  console.log(items);
  let result =await fetch("http://127.0.0.1:8000/api/addCategorie",{
    method:'POST', 
    body:JSON.stringify(items),
    headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
    }       
}).then((response) => {
    console.log(response.data);
    props.onAddSuccess();

                handleClose(); // Close modal after successful DELETE request

  })
  .catch((error) => {
    console.error(error);
  });
  
}

  return (
    <>
          <button class="app-content-headerButton" onClick={handleShow}>      New Categorie            </button>


     
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
        <Modal.Title>Ajouter une catégorie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="nom" class="form-label">
                Nom 
              </label>
              <input
                type="text"
                class="form-control"
                name="nom"
                value={nom} 
                onChange={(e)=>setNom(e.target.value)} c/>
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">
                Description
              </label>
              <textarea
                type="text"
                class="form-control"
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                ></textarea>

          
            </div>
            <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <Button variant="primary" type="submit">Ajouter</Button>
          </form>
        </Modal.Body>
       
      </Modal>
    </>
  );
}


export default AddCat;