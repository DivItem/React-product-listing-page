import React from "react";
import Products from "./components/Products";
import productData from "./data/productData.json";

function App() {
 

  return (
    <>
      <div>
        <div className="product-area">
          {productData.map((item) =>
          <Products titleTxt={item.title} PriceTxt={item.Price} rating={item.rating} pImage={item.pimage} descTxt={item.desc} /> )}
        </div>
      </div>
    </>
  )
}

export default App;
