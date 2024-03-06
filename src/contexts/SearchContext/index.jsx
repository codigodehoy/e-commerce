import { useState, useEffect, createContext, useMemo } from "react";

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [imageProduct, setImageProduct] = useState("");
  const [titleProduct, setTitleProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [filterByPrice, setFilterByPrice] = useState("");
  const [filtersByCategory, setFiltersByCategory] = useState([]);

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productList = await getData();
        setProducts(productList);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const filterProductsByPrice = (filter, productsByCategory, currentProducts) => {
    switch (filter) {
      case "Price_Low":
        const filterByLowPrice = filtersByCategory.length > 0 ? productsByCategory : currentProducts;
        return filterByLowPrice.sort((product1, product2) => product1.price - product2.price);
      case "Price_High":
        const filterByHighPrice = filtersByCategory.length > 0 ? productsByCategory : currentProducts;
        return filterByHighPrice
          .sort((product1, product2) => product1.price - product2.price)
          .reverse();
      default:
        return filtersByCategory.length > 0
          ? productsByCategory
          : currentProducts;
    }
  };

  const searchedProducts = useMemo(() => {
    const currentProducts = products.filter((product) => {
      const productName = product.title.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return productName.includes(searchText);
    });

    const productsByCategory = filtersByCategory.flatMap((category) => {
      const productsByCategory = currentProducts.filter(
        (product) => product.category === category
      );
      return productsByCategory;
    });

    return filterProductsByPrice(filterByPrice, productsByCategory, currentProducts);

  }, [products, searchValue, filterByPrice, filtersByCategory]);

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
        searchedProducts,
        isLoading,
        isOpen,
        setIsOpen,
        imageProduct,
        setFilter: setFilterByPrice,
        setImageProduct,
        titleProduct,
        setTitleProduct,
        priceProduct,
        setPriceProduct,
        descriptionProduct,
        setDescriptionProduct,
        filtersByCategory,
        setFiltersByCategory,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };
