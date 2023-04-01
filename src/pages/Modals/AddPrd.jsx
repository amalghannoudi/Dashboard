import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddPrd(props) {
  const [show, setShow] = useState(false);
  const [nom, setNom] = useState("");
  const [price, setPrice] = useState("");
  const [categorie_id, setCategorie_id] = useState(0);
  const [categories, setCategories] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let newItem = { nom, price, categorie_id };
    console.log("newItem", newItem);
    let result = await fetch("http://127.0.0.1:8000/api/addProduct", {
      method: 'POST',
      body: JSON.stringify(newItem),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }).then(async (response) => {
      const data = await response.json();
      console.log("res", data);
      props.onAddSuccess();
      handleClose(); // Close modal after successful DELETE request


    })
      .catch((error) => {
        console.error(error);
      });

  }

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("http://127.0.0.1:8000/api/getCategorie");
      const data = await response.json();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  return (
    <>
      <button class="app-content-headerButton" onClick={handleShow}>New Product</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un Produit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="nom" class="form-label">Nom</label>
              <input
                type="text"
                class="form-control"
                name="nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="price" class="form-label">Price</label>
              <input
                type="text"
                class="form-control"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="categorie_id" class="form-label">Categorie</label>
              <select
                class="form-control"
                name="categorie_id"
                value={categorie_id}
                onChange={(e) => setCategorie_id(e.target.value)}
              >
                <option value="">Choisir une catégorie</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>{category.nom}</option>
                ))}
              </select>
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


export default AddPrd;