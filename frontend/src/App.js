import Header from "./components/header/Header";
import Selection from "./components/selection/Selection";
import Advertising from "./components/advertising/Advertising";
import Reviews from "./components/reviews/Reviews";


function App() {
  return (
    <div className="App">
      <Header/>
      <Selection/>
      <Advertising/>
      <Reviews/>
    </div>
  );
}

export default App;
