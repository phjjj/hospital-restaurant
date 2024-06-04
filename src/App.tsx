import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Select from "./pages/Select";
import Result from "./pages/result";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/select", element: <Select /> },
    { path: "/result", element: <Result /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
