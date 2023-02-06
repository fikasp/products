import React from 'react';

export default function ProductForm ({ mode, product, setProduct, onClick, onCancel }) {
  const handleEnter = callback => (event) => {
    if (event.key === "Enter") {
      callback();
    }
  };
  return (
    <div className="product-inputs">

      <input
        type="text"
        placeholder="Product Name"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
        onKeyDown={handleEnter(onClick)}
      />

      <input
        type="number"
        placeholder="Product Price"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: Number(e.target.value) })}
        onKeyDown={handleEnter(onClick)}
      />

      <div className="buttons">
        {mode === "add" ? (
          <button onClick={onClick}>Add Product</button>
        ) : (
          <>
            <button onClick={onClick}>Update</button>
            <button onClick={onCancel}>Cancel</button>
          </>
        )}
      </div>
    </div>
  );
};
  