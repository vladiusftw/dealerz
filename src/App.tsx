import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout";
import theme from "./theme";

import "@fontsource/dm-sans";
import Shop from "./pages/Shop";

export const App = () => {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/shop",
      element: <Shop />,
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
                key={item.path}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};
