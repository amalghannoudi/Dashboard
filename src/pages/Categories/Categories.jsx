import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import axios from 'axios';
import { useState,useEffect } from 'react';
import AddCat from '../Modals/AddCat';
<<<<<<< HEAD
import UpdateCat from '../Modals/UpdateCat';
=======
>>>>>>> 2004bbc4683550f31360d05339c2b671a647333f
const Categories = () => {
  const [searchText, setSearchText] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
   
    fetchData();
  }, [searchText]);
    async  function deleteCat (id) {
        let result =await  fetch ("http://127.0.0.1:8000/api/deleteCat/"+id,{
          method :'DELETE'
          }); 
          result =await result.json();
          console.log(result);
          fetchData() ; 
      }
      async function fetchData () {
        const response = await fetch("http://127.0.0.1:8000/api/getCategorie");
    const data = await response.json();
    const filteredData = data.filter((category) =>
      category.nom.toLowerCase().includes(searchText.toLowerCase())
    );
    setData(filteredData);
  }
      const handleAdd= (id) => {
        fetchData();
      }
      const handleUpdate= (id) => {
        fetchData();
      }
  return (
    <div>
      <Sidebar />
      <div class="app-content">
    <div class="app-content-header">
      <h1 class="app-content-headerText">Categories</h1>  
   <AddCat onAddSuccess={handleAdd}/>
    </div>
    <br></br>
    <input type="search" class="form-control rounded"  placeholder="Search Categorie ..." aria-label="Search" aria-describedby="search-addon"  value={searchText} onChange={(e) => setSearchText(e.target.value)} />

   <br></br>
    <div class="products-area-wrapper tableView">
      <div class="products-header">
      <div class="product-cell sales">Id<button class="sort-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
          </button></div>
        <div class="product-cell sales">Nom<button class="sort-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
          </button></div>
        <div class="product-cell sales">Description<button class="sort-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
          </button></div>
        
      
        
      </div>
      {data.map(data => (
      <div class="products-row" key={data.id}>
        <button class="cell-more-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
        </button>
       
        <div class="product-cell sales">{data.id}</div>

             <div class="product-cell sales">{data.nom}</div>

            
             <div  class="product-cell sales" >{data.description}</div>

           
             <div class="actions">
      <UpdateCat cat={data.id}  onUpdateSuccess={handleUpdate} />
    <a href="#" class="delete" onClick={()=>deleteCat(data.id)}>Delete</a>
  </div>


       
      </div>
                         ))}

      </div>
</div>
    </div>    
  )
}

export default Categories
