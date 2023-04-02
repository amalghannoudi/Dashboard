


import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
function UpdatePrd(props) {
  console.log("categorie",props);
  const [show, setShow] = useState(false);
  const [nom, setNom] = useState("");
  const [price, setPrice] = useState("");
  const [categorie_id, setCategorie_id] = useState(0);
  const [id, setId] = useState("");
  const [categories, setCategories] = useState([]);

  const [items, setItems] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
 
  const handleSubmit = async (event) => {
    event.preventDefault();
 
    let newItem = { nom, price,categorie_id };
    setItems(newItem);
    console.log("id",id);
    console.log("items",items);
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/updatePrd/${id}`, {
        method: 'PUT',
        body: JSON.stringify(items),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('res', data);
      props.onUpdateSuccess();

      handleClose();
      // Close modal after successful PUT request
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };
  
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
              <label htmlFor="nom" className="form-label">
                Price              </label>
              <input
                type="text"
                className="form-control"
                name="price"
                defaultValue={price}
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
            <Button variant="primary" type="submit">
              Modifier
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}




export default UpdatePrd;