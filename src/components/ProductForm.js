import React from 'react';

export default function ProductForm ({ mode, product, setProduct, onClick, onCancel }) {
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div className="product-inputs">

      <input
        type="text"
        placeholder="Product Name"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
        onKeyDown={(e) => handleEnter(e)}
      />

      <input
        type="number"
        placeholder="Product Price"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: Number(e.target.value) })}
        onKeyDown={(e) => handleEnter(e)}
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
  