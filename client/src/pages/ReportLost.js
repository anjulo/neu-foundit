import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createLostItemThunk } from 'thunks/itemsThunks.js';
import { useNavigate } from 'react-router-dom';

const ReportLost = () => {
  const [itemData, setItemData] = useState({
    name: '',
    description: '',
    location: '',
    lostDate: '',
  });

  const handleChange = (e) => {
    setItemData({
      ...itemData,
      [e.target.name]: e.target.value,
    });
  };
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createLostItemThunk(itemData));
    navigate('/items');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Lost Item Report</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Item Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={itemData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={itemData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            value={itemData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            className="form-control"
            id="lostDate"
            name="lostDate"
            value={itemData.lostDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit Report
        </button>
      </form>
    </div>
  );
}

export default ReportLost;
