import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { RegisterApi } from "../../functions/api";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { setUser, userToken } from "@/store/slice";
import React, { useRef } from 'react';

export function SignUp() {
     const fileInput = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact_number, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [company_name, setCompanyName] = useState("");
  const [type, setType] = useState(0);
   const handleDivClick = () => {
    fileInput.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file); // Do something with the selected file
  };

  const submit = async () => {

 

    await RegisterApi(
      name,
      username,
      email,
      contact_number,
      address,
      company_name,
       password,
      type
    )
      .then(async (res) => {
        dispatch(setUser(res.data.user));
        dispatch(userToken(res.data.token));
        navigate("/dashboard/home");
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleRoleChange = (e) => {
    setType(e.target.value === "vendor" ? 1 : 0);
  };

  return (
    <section className="my-20 mx-80 flex">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">
            Join Us Today
          </Typography>
          <Typography
            variant="paragraph"
            color="blue-gray"
            className="text-lg font-normal"
          >
            Enter your email and password to register.
          </Typography>
        </div>
        <form className="mt-2 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", cursor: "pointer"}} className="mb-4" onClick={handleDivClick}>
            <div style={{ background: "#D3D3D3", width: "100px", height: "100px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><CameraAltIcon sx={{ fontSize: "2rem", color: "gray" }} />
            <input 
        type="file" 
        style={{ display: 'none' }} 
        ref={fileInput} 
        onChange={handleFileChange} 
        accept="image/*"
      />
            </div>
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Name
            </Typography>
            <Input
              size="lg"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Enter Name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Username
            </Typography>
            <Input
              size="lg"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="Enter Username"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Password
            </Typography>
            <Input
              size="lg"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="password"
              type="password"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Contact Number
            </Typography>
            <Input
              size="lg"
              onChange={(e) => setContactNumber(e.target.value)}
              value={contact_number}
              placeholder="Enter Contact Number"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Address
            </Typography>
            <Input
              size="lg"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              placeholder="Enter Address"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Company Name
            </Typography>
            <Input
              size="lg"
              onChange={(e) => setCompanyName(e.target.value)}
              value={company_name}
              placeholder="Enter Company Name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            <div className="">
              <label htmlFor="" className="mb-2 p-2">
                Vendor:
              </label>
              <input
                type="radio"
                onChange={handleRoleChange}
                value="vendor"
                checked={type === 1}
              />
              <br />
            </div>
            <div className="">
              <label htmlFor="" className="mb-2 p-2">
                User:
              </label>
              <input
                type="radio"
                value="user"
                onChange={handleRoleChange}
                checked={type === 0}
              />
              <br />
            </div>
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center justify-start font-medium"
              >
                I agree the&nbsp;
                <a
                  href="#"
                  className="font-normal text-black transition-colors hover:text-gray-900 underline"
                >
                  Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button onClick={submit} className="mt-6" fullWidth>
            Register Now
          </Button>

          <div className="space-y-4 mt-8">
            <Button
              size="lg"
              color="white"
              className="flex items-center gap-2 justify-center shadow-md"
              fullWidth
            >
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1156_824)">
                  <path
                    d="M16.3442 8.18429C16.3442 7.64047 16.3001 7.09371 16.206 6.55872H8.66016V9.63937H12.9813C12.802 10.6329 12.2258 11.5119 11.3822 12.0704V14.0693H13.9602C15.4741 12.6759 16.3442 10.6182 16.3442 8.18429Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M8.65974 16.0006C10.8174 16.0006 12.637 15.2922 13.9627 14.0693L11.3847 12.0704C10.6675 12.5584 9.7415 12.8347 8.66268 12.8347C6.5756 12.8347 4.80598 11.4266 4.17104 9.53357H1.51074V11.5942C2.86882 14.2956 5.63494 16.0006 8.65974 16.0006Z"
                    fill="#34A853"
                  />
                  <path
                    d="M4.16852 9.53356C3.83341 8.53999 3.83341 7.46411 4.16852 6.47054V4.40991H1.51116C0.376489 6.67043 0.376489 9.33367 1.51116 11.5942L4.16852 9.53356Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M8.65974 3.16644C9.80029 3.1488 10.9026 3.57798 11.7286 4.36578L14.0127 2.08174C12.5664 0.72367 10.6469 -0.0229773 8.65974 0.000539111C5.63494 0.000539111 2.86882 1.70548 1.51074 4.40987L4.1681 6.4705C4.8001 4.57449 6.57266 3.16644 8.65974 3.16644Z"
                    fill="#EA4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1156_824">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span>Sign in With Google</span>
            </Button>
            <Button
              size="lg"
              color="white"
              className="flex items-center gap-2 justify-center shadow-md"
              fullWidth
            >
              <img
                src="/img/twitter-logo.svg"
                height={24}
                width={24}
                alt=""
              />
              <span>Sign in With Twitter</span>
            </Button>
          </div>
          <Typography
            variant="paragraph"
            className="text-center text-blue-gray-500 font-medium mt-4"
          >
            Already have an account?
            <Link to="/login" className="text-gray-900 ml-1">
              Sign in
            </Link>
          </Typography>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
