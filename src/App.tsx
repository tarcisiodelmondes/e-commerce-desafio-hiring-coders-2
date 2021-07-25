import { CartContextProvider } from "./contexts/CartContext";
import Home from "./pages/Home";

function App() {
  return (
    <CartContextProvider>
      <Home />
    </CartContextProvider>
  );
}

export default App;
