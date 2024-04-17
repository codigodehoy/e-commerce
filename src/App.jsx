import "./App.css";

import { ProductStore } from "./components/page/ProductStore";
import { SearchProvider } from "./contexts/SearchContext";

function App() {
  return (
    <SearchProvider>
      <ProductStore />
    </SearchProvider>
  );
}

export default App;
