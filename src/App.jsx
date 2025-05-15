import MainLayout from "./layout/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CsirtDefinition from "./pages/CsirtDefinition";

function App() {
  return (
    <div className="w-screen h-screen bg-white">
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/profile/csirt"
              element={<CsirtDefinition />}
            />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
