import axios from "./instance";

const eventsApi = async (token) => {
  const data = await axios({
    url: "/events",
    method: "get",
    headers: {
      ...axios.headers,
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

const bookingApi = async (token) => {
  const data = await axios({
    url: "/bookings",
    method: "get",
    headers: {
      ...axios.headers,
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

const createEvent = async (data, token) => {
  const res = await axios({
    url: "/events/create",
    method: "post",
    headers: {
      ...axios.headers,
      Authorization: `Bearer ${token}`,
    },
    data: {
      title: data.title,
      location: data.location,
      start_date_time: data.start_date_time,
      end_date_time: data.end_date_time,
      description: data.description,
      price: data.price,
    },
  });

  return res;
};
const createBooking = async (event_id, token) => {
  const res = await axios({
    url: "/bookings/",
    method: "post",
    headers: {
      ...axios.headers,
      Authorization: `Bearer ${token}`,
    },
    data: {
      event_id: event_id,
    },
  });

  return res;
};

const RegisterApi = async (name, username,email,contact_number,address,company_name, password, type) => {
  const data = await axios.post("/vendors/register", {
    name: name,
    username: username,
    email: email,
    contact_number: contact_number,
    address: address,
    company_name:company_name,
    password: password,
     type: type,
  });
  return data;
};

const LoginApi = async (email, password) => {
  const data = await axios.post("/vendors/login", {
    email: email,
    password: password,
  });
  return data;
};
const getAllVendors = async () => {
  try {
    const vendors = await axios.get("/vendors");
    console.log("all vendors data is here,",vendors)
    return vendors.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
const getVendorEvents = async (vendorId, token) => {
  const res = await axios({
    url: `/vendors/${vendorId}/events`,
    method: "get",
    headers: {
      ...axios.headers,
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};
export {
  eventsApi,
  createEvent,
  LoginApi,
  createBooking,
  RegisterApi,
  bookingApi,
  getAllVendors,
  getVendorEvents
};
