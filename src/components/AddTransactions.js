import React, { useState } from "react";
//import '../../App.css'; // Adjust the number of "../" depending on the directory structure
import './styles.css'

function AddTransactionForm() {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log("Transaction added successfully!");
        // Reset form fields
        setFormData({
          date: "",
          description: "",
          category: "",
          amount: ""
        });
      } else {
        console.error("Failed to add transaction:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  return (
    <div className="ui raised segment">
      <h2 className="ui header">Add New Transaction</h2>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="fields">
          <div className="field">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label>Description</label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label>Category</label>
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label>Amount</label>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={formData.amount}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
