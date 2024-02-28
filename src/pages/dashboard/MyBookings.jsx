
import Table from '../../Components/Table'
import { useNavigate } from "react-router-dom";
import { func } from 'prop-types';


export default function MyBookings() {
  function fetchData() {
    
  }

  const navigate = useNavigate();

  const columns = [
    { field: 'id', headerName: 'Sno', width: 70 },
    { field: 'title', headerName: 'Title', width: 130 },
    { field: 'vendor', headerName: 'Vendor', width: 130 },
    { field: 'capacity', headerName: 'Capacity', width: 130 },
    { field: 'location', headerName: 'Location', width: 130 },
    { field: 'description', headerName: 'Descripton', width: 130 },
    { field: 'terms', headerName: 'Terms', width: 130 },
    { field: 'start_date_time', headerName: 'Start Date Time', width: 130 },
    { field: 'end_date_time', headerName: 'End Date Time', width: 130 },
    { field: 'price', headerName: 'Price', width: 130 },
  ];
  
  const rows = [
    { id: 1, title: 'New Event', vendor: "Azher", capacity: 300,  location: 'karachi',description: "test", terms: "test",  start_date_time: "35/25/200", end_date_time: "52/22/33", price: 25002 },
    { id: 2, title: 'New Event', vendor: "Azher", capacity: 300,  location: 'karachi',description: "test", terms: "test",  start_date_time: "35/25/200", end_date_time: "52/22/33", price: 25002 },
    { id: 3, title: 'New Event', vendor: "Azher", capacity: 300,  location: 'karachi',description: "test", terms: "test",  start_date_time: "35/25/200", end_date_time: "52/22/33", price: 25002 },
    { id: 4, title: 'New Event', vendor: "Azher", capacity: 300,  location: 'karachi',description: "test", terms: "test",  start_date_time: "35/25/200", end_date_time: "52/22/33", price: 25002 },
    { id: 5, title: 'New Event', vendor: "Azher", capacity: 300,  location: 'karachi',description: "test", terms: "test",  start_date_time: "35/25/200", end_date_time: "52/22/33", price: 25002 },
    { id: 6, title: 'New Event', vendor: "Azher", capacity: 300,  location: 'karachi',description: "test", terms: "test",  start_date_time: "35/25/200", end_date_time: "52/22/33", price: 25002 },
    { id: 7, title: 'New Event', vendor: "Azher", capacity: 300,  location: 'karachi',description: "test", terms: "test",  start_date_time: "35/25/200", end_date_time: "52/22/33", price: 25002 },
    ];

  return (
    <section>
           <div className='text-end'>
      <button onClick={() => navigate("/dashboard/new-booking")} className="bg-danger px-3 py-2 mt-5 rounded-md text-white">New Booking</button>
      </div>
    
      <div className='mt-4'>

      <Table rows={rows} columns={columns} />
      </div>
    </section>
  );
}