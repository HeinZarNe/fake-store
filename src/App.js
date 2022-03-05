import "./App.css";
import Header from "./containers/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route
            path="*"
            element={
              <div
                style={{
                  display: "flex",
                  width: "100vw",
                  height: "100vh",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h1>404 Page Not Found!</h1>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
