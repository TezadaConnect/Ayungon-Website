import { Outlet } from "react-router-dom";
import Navbar, { DropBarNavigation } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="z-50">
        <Navbar />
      </div>
      <div className="relative">
        <DropBarNavigation />
      </div>

      <div className="z-0">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
