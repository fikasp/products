import React, { useState } from 'react';
import { formatNumber as format } from './Tools' 
import ProductInputs from './ProductInputs'
import Product from './Product';
import Modal from './Modal';

let index = 0;
export default function ProductsList() {

  const [products, setProducts] = useState([
    { id: -3, name: "Product 1", price: 10 },
    { id: -2, name: "Product 2", price: 20 },
    { id: -1, name: "Product 3", price: 30 },
  ]);
  const [newProduct, setNewProduct] = useState({name: '',price: ''});
  const [editingProduct, setEditingProduct] = useState({});
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
    if (!newProduct.name || !newProduct.price) {
      setShowModal(true);
      return;
    }
    setProducts([...products, { 
      id: index, 
      name: newProduct.name, 
      price: newProduct.price}
    ]);
    setNewProduct({name: '',price: ''});
    setShowModal(false)
  };

  const editProduct = (productId) => {
    const product = products.find(p => p.id === productId);
    setEditingProduct(product);
  };

  const updateProduct = () => {
    if (!editingProduct.name || !editingProduct.price) {
      setShowModal(true);
      return;
    }
    setProducts(products.map((product) =>
    product.id === editingProduct.id
      ? editingProduct
      : product
      )
    );
    setEditingProduct({});
  };

  const cancelEditing = () => {
    setEditingProduct({});
  };

  const removeProduct = productId => {
    setProducts(products.filter(product => product.id !== productId));
  };

  const handleEnter = callback => (event) => {
    if (event.key === "Enter") {
      callback();
    }
  };

  return (
    <div className="product-list">

      {!editingProduct.id ? (

        <ProductInputs
          mode="add"
          name={newProduct.name}
          price={newProduct.price}
          onChangeName={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          onChangePrice={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
          onClick={addProduct}
          onKeyDown={handleEnter(addProduct)}
        />
      ) : (

        <ProductInputs
          mode="edit"
          name={editingProduct.name}
          price={editingProduct.price}
          onChangeName={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
          onChangePrice={(e) => setEditingProduct({ ...editingProduct, price: Number(e.target.value) })}
          onClick={updateProduct}
          onKeyDown={handleEnter(updateProduct)}
          cancel={cancelEditing}
        />
      )}

      {/* { !editingProduct.id ? (

        <div className="add-product">
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
            onKeyDown={handleEnter(addProduct)}
          />
          <input
            type="number"
            placeholder="Product Price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({...newProduct, price: Number(e.target.value)})}
            onKeyDown={handleEnter(addProduct)}
          />
          <div className="buttons">
            <button onClick={addProduct}>Add Product</button>
          </div>
        </div>

        ) : (
          
        <div className="edit-product">
          <input
            type="text"
            placeholder="Product Name"
            value={editingProduct.name}
            onChange={(e) => 
              setEditingProduct({...editingProduct, name: e.target.value})}
            onKeyDown={handleEnter(updateProduct)}            
          />
          <input
            type="number"
            placeholder="Product Price"
            value={editingProduct.price}
            onChange={(e) => 
              setEditingProduct({ ...editingProduct, price: Number(e.target.value) })}
            onKeyDown={handleEnter(updateProduct)}
          />
          <div className="buttons">
            <button onClick={updateProduct}>Update</button>
            <button onClick={cancelEditing}>Cancel</button>
          </div>
        </div>
      )} */}

      <div>
        {products.map(product => (
          <Product 
            key={product.id} 
            product={product} 
            removeProduct={removeProduct} 
            editProduct={editProduct} 
          />
        ))}
      </div>

      <div className="total">Total: <span>{format(total)}</span> $</div>
      
      { showModal && 
        <Modal modalRef={modalRef} setShowModal={setShowModal} /> 
      }

    </div>
  );
};