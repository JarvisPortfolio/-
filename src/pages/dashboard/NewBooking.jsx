import { useEffect, useState } from 'react';
import { Card, Button, Row, Col, Image } from 'react-bootstrap';
import { eventsApi } from '../../functions/api';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import Vendors from './Vendors';
import SelectedVendor from './SelectedVendor';

export default function NewBooking() {
  const [eventData, setEventData] = useState([]);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await eventsApi(token);
        setEventData(res.data);
      } catch (error) {
        console.error('Error fetching booking data:', error);
      }
    };

    fetchData();
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<BsStarFill key={i} style={{ color: 'yellow', pointerEvents: 'none' }} />);
      } else if (i - 0.5 === rating) {
        stars.push(<BsStarHalf key={i} style={{ color: 'yellow', pointerEvents: 'none' }} />);
      } else {
        stars.push(<BsStar key={i} style={{ color: 'yellow', pointerEvents: 'none' }} />);
      }
    }
    return stars;
  };

  return (
    
    <section>
      {selectedVendor ? <><SelectedVendor selectedVendor={selectedVendor } /></>:<Vendors setSelectedVendor={setSelectedVendor} />}
      
      {/* <Row className='mt-4'>
        {eventData.map((event, index) => (
          <Col key={index} className="col-6 mt-3">
            <Link to={`/event/${event.id}`} style={{ textDecoration: 'none' }}>
              <div className="px-2 py-2" style={{ background: "#ffffff", border: "1px solid #c0c0c0", borderRadius: "5px", display: "flex" }}>
                <div className="h-100 w-20" style={{ borderRadius: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Image src={event.imageUrl} style={{ objectFit: "cover", borderRadius: "5px", height: "80px", width: "95px" }} alt={`Image-${index}`} />
                </div>
                <div className="ml-4" style={{ textDecoration: 'none', color: 'black' }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <h1 style={{ fontWeight: "700", fontSize: "20px", textDecoration: 'none', color: 'black' }}>{event.name}</h1>
                    <div className="d-flex">
                      {renderStars(event.rating)}
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
            </Link>
          </Col>
        ))}
      </Row> */}
    </section>
  );
}
