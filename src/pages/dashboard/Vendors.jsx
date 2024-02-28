import React, { useState, useEffect } from 'react';
import { getAllVendors } from '../../functions/api';

const Vendors = ({ setSelectedVendor }) => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const vendorsData = await getAllVendors();
        setVendors(vendorsData);
      } catch (error) {
        console.error('Failed to fetch vendors:', error);
      }
    };

    fetchVendors();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">All Vendors</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {vendors.map((vendor) => (
          <div key={vendor.id} className="col">
            <div
              className="card h-100 hover cursor-pointer"
              onClick={() => setSelectedVendor(vendor.id)}
            >
              <div className="card-body">
                <h5 className="card-title">{vendor.name}</h5>
                <p className="card-text">Username: {vendor.username}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vendors;
