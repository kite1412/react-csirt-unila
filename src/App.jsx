// import MainLayout from "./layout/MainLayout";

// function App() {
//   return (
//     <div className="w-screen h-screen bg-white">
//       <MainLayout>asdsd</MainLayout>
//     </div>
//   );
// }

// export default App;
import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  return (
    <div className="w-screen h-screen bg-blue-500 overflow-x-hidden overflow-y-auto flex justify-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
