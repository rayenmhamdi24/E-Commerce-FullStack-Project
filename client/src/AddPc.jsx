import React, { useState } from "react";

function AddPc({ handelAdd, changeview }) {
  const [name, setName] = useState("");
  const [imageUrl, setImage] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSubmit = () => {
    if (!name || !imageUrl || quantity <= 0 || price <= 0) {
      alert("Please fill in all fields with valid values.");
      return;
    }
    handelAdd({ name, imageUrl, quantity, price });
    changeview("home");
  };

  return (
    <div className="add-pc-container">
      <h1>Add New PC</h1>
      <div className="mb-3">
        <label htmlFor="nameInput" className="form-label">
          Name
        </label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          id="nameInput"
          placeholder="Enter the name of your product"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="imageUrlInput" className="form-label">
          Image URL
        </label>
        <input
          type="text"
          onChange={(e) => setImage(e.target.value)}
          className="form-control"
          id="imageUrlInput"
          placeholder="Enter the image URL of your product"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="quantityInput" className="form-label">
          Quantity
        </label>
        <input
          type="number"
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="form-control"
          id="quantityInput"
          placeholder="Enter the quantity of your product"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="priceInput" className="form-label">
          Price
        </label>
        <input
          type="number"
          onChange={(e) => setPrice(Number(e.target.value))}
          className="form-control"
          id="priceInput"
          placeholder="Enter the price of your product"
        />
      </div>

      <button className="btn btn-primary" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
}

export default AddPc;
