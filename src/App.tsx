import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Select from "./pages/Select";
import Result from "./pages/Result";
import { GlobalStyle } from "./style/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./style/theme";
import Layout from "./components/Layout/Layout";
import { useEffect } from "react";
import { NavermapsProvider } from "react-naver-maps";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: "/select",
      element: (
        <Layout>
          <Select />
        </Layout>
      ),
    },
    {
      path: "/result",
      element: (
        <Layout>
          <Result />
        </Layout>
      ),
    },
  ]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      localStorage.setItem("Latitude", latitude.toString());
      localStorage.setItem("Longitude", longitude.toString());
    });
  }, []);

  return (
    <NavermapsProvider ncpClientId={import.meta.env.VITE_NAVER_CLIENT_ID}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </NavermapsProvider>
  );
}

export default App;
