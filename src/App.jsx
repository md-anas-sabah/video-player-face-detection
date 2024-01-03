import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import LandingPage from "./pages/LandingPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);
  return (
    <div className="h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
