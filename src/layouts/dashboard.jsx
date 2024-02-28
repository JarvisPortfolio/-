import { Routes, Route } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import {
  Sidenav,
  DashboardNavbar,
  Configurator,
  Footer,
} from "@/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";
import { Home } from "@/pages/dashboard";
import MyBookings from "@/pages/dashboard/MyBookings";
import NewBooking from "@/pages/dashboard/NewBooking";
import Vendors from "@/pages/dashboard/Vendors";

export function Dashboard() {
  const user = useSelector((state) => state.user.user);
  
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav
        routes={routes}
        brandImg={
          sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
        }
      />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar />
        <Configurator />
        <IconButton
          size="lg"
          color="white"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
          ripple={false}
          onClick={() => setOpenConfigurator(dispatch, true)}
        >
          <Cog6ToothIcon className="h-5 w-5" />
        </IconButton>
        <Routes>
     
            <Route
          path="/home"
          exact
          element={ <Home />}
        />
            <Route
          path="/my-bookings"
          exact
          element={ <MyBookings />}
        />
            <Route
          path="/new-booking"
          exact
          element={ <NewBooking />}
          />
               <Route
          path="/vendors"
          exact
          element={ <Vendors />}
        />
        </Routes>
       
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
