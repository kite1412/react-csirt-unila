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
    <div className="w-screen h-fit bg-blue-500 ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
