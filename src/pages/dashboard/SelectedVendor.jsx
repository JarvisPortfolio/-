import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { getVendorEvents } from '../../functions/api';
import Image1 from '../../../public/img/team-2.jpeg';

const SelectedVendor = ({ selectedVendor }) => {
  const [events, setEvents] = useState([]);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getVendorEvents(selectedVendor, token);
        setEvents(response.data);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="container mt-4">
      
      <Row className='mt-4'>
        {events.map((event, index) => (
          <Col key={index} className="col-6 mt-3">
            <Card className="shadow">
              <Card.Body>
                <div className="px-2 py-2" style={{ background: "#ffffff", borderRadius: "5px", display: "flex" }}>
                  <div className="h-100 w-20" style={{ borderRadius: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src={Image1} style={{ objectFit: "cover", borderRadius: "5px", height: "80px", width: "95px" }} alt={`Image-${index}`} />
                  </div>
                  <div className="ml-4" style={{ textDecoration: 'none', color: 'black' }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <h1 style={{ fontWeight: "700", fontSize: "20px", textDecoration: 'none', color: 'black' }}>{event.name}</h1>
                      <div className="d-flex">
                        {/* Add your star rating component here */}
                      </div>
                    </div>
                    <p style={{ fontSize: "14px", lineHeight: "17px", color: "grey", textDecoration: 'none' }}>{event.description}</p>
                    <div>
                      <strong style={{ textDecoration: 'none' }}>Vendor:</strong> {event.user.name}<br />
                      <strong style={{ textDecoration: 'none' }}>Capacity:</strong> {event.capacity}<br />
                      <strong style={{ textDecoration: 'none' }}>Location:</strong> {event.location}<br />
                      <strong style={{ textDecoration: 'none' }}>Terms:</strong> {event.terms}<br />
                      <strong style={{ textDecoration: 'none' }}>Start Date Time:</strong> {new Date(event.start_date_time).toLocaleString()}<br />
                      <strong style={{ textDecoration: 'none' }}>End Date Time:</strong> {new Date(event.end_date_time).toLocaleString()}<br />
                      <strong style={{ textDecoration: 'none' }}>Price:</strong> {event.price}<br />
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SelectedVendor;
