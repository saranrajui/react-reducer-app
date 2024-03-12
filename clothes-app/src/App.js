import Header from "./components/Header";

import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div className="container-fluid">
      <div className="app app-wrapper">
        <Header />

        <Routes>
          <Route path="/" exact Component={ProductListing} />
          <Route path="/product/:productId" exact Component={ProductDetail} />
          <Route> 404! Not Found! </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
