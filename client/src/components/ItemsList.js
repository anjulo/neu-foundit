import React from 'react';

const ItemsList = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <h2>{item.name}</h2>
          <p>Description: {item.description}</p>
          <p>Location: {item.location}</p>
          <p>Lost Date: {item.lostDate || item.foundDate}</p>
          <p>Report Date: {item.reportDate}</p>
          <p>Author: {item.author.username}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemsList;
