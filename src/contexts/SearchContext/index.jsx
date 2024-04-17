import { useState, useEffect, createContext, useMemo } from "react";

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [imageProduct, setImageProduct] = useState("");
  const [titleProduct, setTitleProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [filterByPrice, setFilterByPrice] = useState("");
  const [filtersByCategory, setFiltersByCategory] = useState([]);
  const [rating, setRating] = useState(1);
  const [shoppingCartTotal, setShoppingCartTotal] = useState(0);

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

  const filterProductsByPrice = (
    filter,
    productsByCategory,
    productsByRate
  ) => {
    switch (filter) {
      case "Price_Low":
        const filterByLowPrice =
          filtersByCategory.length > 0 ? productsByCategory : productsByRate;
        return filterByLowPrice.sort(
          (product1, product2) => product1.price - product2.price
        );
      case "Price_High":
        const filterByHighPrice =
          filtersByCategory.length > 0 ? productsByCategory : productsByRate;
        return filterByHighPrice
          .sort((product1, product2) => product1.price - product2.price)
          .reverse();
      default:
        return filtersByCategory.length > 0
          ? productsByCategory
          : productsByRate;
    }
  };

  const filterProductsByRate = (currentProducts) => {
    return currentProducts.filter((products) => {
      const productRate = Math.round(products.rating.rate);
      return productRate >= rating;
    });
  };

  const filterProductsByCategory = (productsByRate) => {
    return filtersByCategory.flatMap((category) => {
      const productsByCategory = productsByRate.filter(
        (product) => product.category === category
      );
      return productsByCategory;
    });
  };

  const searchedProducts = useMemo(() => {
    const currentProducts = products.filter((product) => {
      const productName = product.title.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return productName.includes(searchText);
    });

    const productsByRate = filterProductsByRate(currentProducts);

    const productsByCategory = filterProductsByCategory(productsByRate);

    return filterProductsByPrice(
      filterByPrice,
      productsByCategory,
      productsByRate
    );
  }, [products, searchValue, filterByPrice, filtersByCategory, rating]);

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
        searchedProducts,
        isLoading,
        isOpen,
        setIsOpen,
        isCartOpen,
        setIsCartOpen,
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
        setRating,
        rating,
        setShoppingCartTotal,
        shoppingCartTotal,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };
