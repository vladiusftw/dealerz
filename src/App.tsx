import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import theme from "./theme";

export const App = () => {
  const routes = [
    {
      path: "",
      element: <Home />,
    },
  ];
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {routes.map((item, index) => {
            return (
              <Route
                path={item.path}
                element={<Layout>{item.element}</Layout>}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};
