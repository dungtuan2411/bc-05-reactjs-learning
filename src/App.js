// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import ProductList from "./components/ProductList";
import Promotion from "./components/Promotion";

function App() {
  return (
    //   Chỉ return 1 component duy nhất, không return 2 thẻ cùng cấp
    <div className="App">
      <Header />
      <Carousel />
      <ProductList />
      <Promotion />
    </div>
  );
}

export default App;
