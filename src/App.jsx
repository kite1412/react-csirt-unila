import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto flex justify-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
