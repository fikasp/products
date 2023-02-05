import React, { useState } from 'react';
import { formatNumber as format } from './Tools' 
import Product from './Product';
import Modal from './Modal';

let index = 4;
export default function ProductsList() {

  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ]);
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [total, setTotal] = useState(0);
  const modalRef = React.useRef(null);

  React.useEffect(() => {
    console.log(index)
    console.log(products)
    if (showModal) {
      modalRef.current.focus();
    }
    if (products.length === 0) {
      setTotal(0);
    } else {
      setTotal(
        products.reduce((acc, current) => {
          return acc + current.price;
        }, 0)
      );
    }
  }, [products, showModal]);

  const addProduct = () => {
    index++;
    if (!newProductName || !newProductPrice) {
      setShowModal(true);
      return;
    }
    setProducts([...products, { 
      id: index, 
      name: newProductName, 
      price: Number(newProductPrice)}
    ]);
    setNewProductName('');
    setNewProductPrice('');
    setShowModal(false)
  };

  const removeProduct = productId => {
    setProducts(products.filter(product => product.id !== productId));
  };

  const handleAddProduct = (event) => {
    if (event.key === "Enter") {
      addProduct();
    }
  };

  return (
    <div className="product-list">
      <div className="add-product">

        <input
          type="text"
          placeholder="Product Name"
          value={newProductName}
          onChange={e => setNewProductName(e.target.value)}
          onKeyDown={handleAddProduct}
        />

        <input
          type="number"
          placeholder="Product Price"
          value={newProductPrice}
          onChange={e => setNewProductPrice(e.target.value)}
          onKeyDown={handleAddProduct}
        />

        <button onClick={addProduct}>Add Product</button>

      </div>

      <div>
        {products.map(product => (
          <Product key={product.id} product={product} removeProduct={removeProduct} />
        ))}
      </div>

      <div className="total">Total: <span>{format(total)}</span> $</div>
      
      { showModal && 
        <Modal modalRef={modalRef} setShowModal={setShowModal} /> 
      }

    </div>
  );
};