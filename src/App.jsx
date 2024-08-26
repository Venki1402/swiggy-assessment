import "./App.css";
import NavBar from "./components/navbar";
import CartItem1 from "./components/CartItem1";
import CartItem2 from "./components/CartItem2";
import Checkout from "./components/checkout-button";
import Details from "./components/Details";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <div className="content-container">
        <CartItem1 />
        <br />
        <CartItem2 />
        <br />
        <Details />
        <br />
        <Checkout />
      </div>
    </div>
  );
}

export default App;
