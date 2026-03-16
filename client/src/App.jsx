import "./App.css";
import Login from "./components/login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Test from "./components/test";
import Results from "./components/results";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/test",
      element: <Test />,
    },
    {
      path: "/results",
      element: <Results />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
