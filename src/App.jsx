import { useState } from "react";
import "./App.css";
import data from "./Data/data";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Recommended from "./components/Recommended/Recommended";
import Sidebar from "./components/Sidebar/Sidebar";
import Card from "./components/Cards/Card";

function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(null);

  //SearchBar input
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = data.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  //Radio inputs
  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  //Recommended Buttons
  const handleClick = (e) => {
    setCategory(e.target.value);
  };

  //Filtering data
  const filteredData = (data, selected, query) => {
    let filteredProdcuts = data;
    if (query) {
      filteredProdcuts === filteredItems;
    }
    if (selected) {
      filteredProdcuts = filteredProdcuts.filter(
        ({ category, color, newPrice, company, title }) => {
          return (
            category === selected ||
            color === selected ||
            newPrice === selected ||
            company === selected ||
            title === selected
          );
        }
      );
    }
    return filteredProdcuts.map((product) => {
      const { img, title, star, reviews, prevPrice, newPrice } = product;

      return (
        <Card
          key={title}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      );
    });
  };

  const result = filteredData(data, category, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navbar handleInputChange={handleInputChange} query={query} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
