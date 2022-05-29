import Continents from "./components/continent";
import Countries from "./components/countries";
import { useRoutes, BrowserRouter } from "react-router-dom";
import "./App.css";
import { client } from "./ApolloClient/client";
import { ApolloProvider } from "@apollo/client";

const AddRoute = () => {
  let routes = useRoutes([
    { path: "/", element: <Continents /> },
    { path: "/continent/:id", element: <Countries /> },
  ]);
  return routes;
};

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <BrowserRouter>
          <AddRoute />
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
