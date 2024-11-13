import { useState } from "react";
import { Navbar } from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";
import { JoinUs } from "./Components/JoinUs";
import { Carousal } from "./Components/Carousal";
import "./App.css";
import NewsFooter from "./Components/NewsFooter";
const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <Carousal />
      <div className="view">
        <NewsBoard className="view" category={category} />
      </div>
      <div className="view1">
        <JoinUs />
      </div>
      <NewsFooter/>
    </div>
  );
};

export default App;
