import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
  return (
    <Box fontFamily={"DM Sans"}>
      <Navbar />
      {children}
    </Box>
  );
};

export default Layout;
