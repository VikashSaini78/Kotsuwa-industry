import React, { useEffect, useState } from "react";

const Insertdata = () => {
  const [data, setData] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  // Function to handle the deletion of an item
  const handleDelete = (id) => {
    if (id) {
      fetch(`/api/products/${id}`, {
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            // Remove the deleted item from the UI (optional)
            setData((prevData) => prevData.filter((item) => item._id !== id));
          } else {
            console.error("Error deleting product:", data.message);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      console.error("No product ID provided");
    }
  };
  

  return (
    <>
      <div className="insertdata-table">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Brand</th>
              <th scope="col">Category</th>
              <th scope="col">Color</th>
              <th scope="col">Country</th>
              <th scope="col">Price</th>
              <th scope="col">Material</th>
              <th scope="col">MiOdr Qty</th>
              <th scope="col">Pattern</th>
              <th scope="col">Size</th>
              <th scope="col">Style</th>
              <th scope="col">Image</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
  {data.map((item) => {
    return (
      <tr key={item._id}> {/* Use item._id for the key */}
        <td>{item.name}</td>
        <td>{item.brand}</td>
        <td>{item.category}</td>
        <td>{item.color}</td>
        <td>{item.country}</td>
        <td>{item.newprice}</td>
        <td>{item.material}</td>
        <td>{item.minOrderQty}</td>
        <td>{item.pattern}</td>
        <td>{item.size}</td>
        <td>{item.style}</td>
        <td>
          <img src={item.file} alt="image" />
        </td>
        <td>
          <button
            onClick={() => handleDelete(item._id)} // Make sure item._id is passed
          >
            Delete
          </button>
        </td>
      </tr>
    );
  })}
</tbody>

        </table>
      </div>
    </>
  );
};

export default Insertdata;
