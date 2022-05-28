import Continents from "./components/continent";
import Countries from "./components/countries";
import { useRoutes, BrowserRouter } from "react-router-dom";
import "./App.css";

const AddRoute = () => {
  let routes = useRoutes([
    { path: "/", element: <Continents /> },
    { path: "/continent/:id", element: <Countries /> },
  ]);
  return routes;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AddRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
