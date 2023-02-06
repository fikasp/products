import React from 'react';

export default function ProductInputs ({ mode, name, price, onChangeName, onChangePrice, onKeyDown, onClick, cancel }) {
    return (
      <div className="product-input">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={onChangeName}
          onKeyDown={onKeyDown}
        />
        <input
          type="number"
          placeholder="Product Price"
          value={price}
          onChange={onChangePrice}
          onKeyDown={onKeyDown}
        />
        <div className="buttons">
          <button onClick={onClick}>
            {mode === "add" ? "Add Product" : "Update"}
          </button>
          {mode === "edit" && 
          <button onClick={cancel}>
            Cancel
          </button>}
        </div>
      </ div>
    );
  };
  