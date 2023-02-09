import { Outlet } from "react-router-dom";
import StyledNavbar from "./StyledNavbar";
import Footer from "./Footer";

const SharedLayout = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default SharedLayout;
