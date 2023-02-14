import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
  return (
    <Box fontFamily={"DM Sans"}>
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
