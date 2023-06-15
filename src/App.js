import Cart from "./Components/Cart";
import Nav from "./Components/Nav";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div className="App">
      <HomeScreen />
      <Nav />
      <Cart/>
    </div>
  );
}

export default App;
