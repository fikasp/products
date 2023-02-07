import React, { useState } from 'react';
import ProductForm from './ProductForm'
import Product from './Product';
import Modal from './Modal';
import Total from './Total'

let index = 0;
export default function ProductsList() {

  // states
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


  // effects
  React.useEffect(() => {
    console.log(products)
    focusModal()
    countTotal()    
  },[
    showModal,
    products
  ]);

  // focus modal
  const focusModal = () => {
    if (showModal) {
      modalRef.current.focus();
    }
  }

  // count total
  const countTotal = () => {
    if (products.length === 0) {
      setTotal(0);
    } else {
      setTotal(
        products.reduce((acc, current) => {
          return acc + current.price;
        }, 0)
      );
    }
  }

  // add product
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

  // edit product
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

  // remove product
  const removeProduct = productId => {
    setProducts(products.filter(product => product.id !== productId));
  };

  // render
  return (
    <div className="product-list">

      { showModal && 
        <Modal modalRef={modalRef} setShowModal={setShowModal} /> 
      }

      {!editingProduct.id ? (
        // add mode
        <ProductForm
          mode="add"
          product={newProduct}
          setProduct={setNewProduct}
          onClick={addProduct}
        />
      ) : (
        // edit mode
        <ProductForm
          mode="edit"
          product={editingProduct}
          setProduct={setEditingProduct}
          onClick={updateProduct}
          onCancel={cancelEditing}
        />
      )}

      {products.map(product => (
        <Product 
          key={product.id} 
          product={product} 
          removeProduct={removeProduct} 
          editProduct={editProduct} 
        />
      ))}

      <Total total={total} />
      
    </div>
  );
};