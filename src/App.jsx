import { RouterProvider, createBrowserRouter } from "react-router-dom";

import About from "./Pages/About";
import AppLayout from "./Components/AppLayout"; // ✅ Adjust if default export
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";
import Service from "./Pages/Service";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/services", element: <Service /> }, // ✅ fixed spelling
        { path: "/gallery", element: <Gallery /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
