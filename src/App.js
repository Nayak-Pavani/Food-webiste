import "./App.css";
// import FirstCompo from "./components/First"
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import ExploreMenu from "./components/ExploreMenu/ExploreMenu";
import FoodDisplay from "./components/FoodDisplay/FoodDisplay";
import { useState } from "react";
const App = () => {
  const [category, setCategory] = useState("All");

  return (
    <div className="App">
      {/* <FirstCompo></FirstCompo> */}
      <Navbar />
      <Main />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}></FoodDisplay>

    </div>
  );
};

export default App;
