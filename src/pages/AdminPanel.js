import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminPanel = ({ products, deleteProduct, addProduct }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
    price: ""
  });

  const handleAddProduct = () => {
    if (form.name && form.description && form.image && form.price) {
      addProduct(form);
      setForm({ name: "", description: "", image: "", price: "" });
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '900px' }}>
      <h2>Admin Panel</h2>
      <p style={{ fontSize: '18px', marginBottom: '20px' }}>
        Total Products: <strong>{products.length}</strong>
      </p>

      <div style={{ border: '1px solid #ddd', padding: '20px', marginBottom: '30px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
        <h3>Add New Product</h3>
        <input
          className="form-control"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={{ marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ddd', width: '100%' }}
        />
        <input
          className="form-control"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          style={{ marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ddd', width: '100%' }}
        />
        <input
          className="form-control"
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          style={{ marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ddd', width: '100%' }}
        />
        <input
          className="form-control"
          placeholder="Price"
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          style={{ marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ddd', width: '100%' }}
        />

        <button 
          onClick={handleAddProduct}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Add
        </button>
      </div>

      <div>
        <h3>Products List</h3>
        {products.length === 0 ? (
          <p>No products available</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #ddd' }}>
                <th style={{ textAlign: 'left', padding: '10px' }}>Product Name</th>
                <th style={{ textAlign: 'right', padding: '10px' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '10px' }}>
                    <Link 
                      to={`/products/${product.id}`}
                      style={{ color: '#007bff', textDecoration: 'none' }}
                    >
                      {product.name}
                    </Link>
                  </td>
                  <td style={{ padding: '10px', textAlign: 'right' }}>
                    <button
                      className="float-right"
                      onClick={() => deleteProduct(product.id)}
                      style={{
                        padding: '8px 15px',
                        backgroundColor: '#dc3545',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        float: 'right'
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;