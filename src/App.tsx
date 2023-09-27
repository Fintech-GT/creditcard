import CardRecommendation from "./components/CardRecommendation";
import CardInformation from "./components/CardInformation";
import { useEffect, useState } from "react";
import "./assets/App.css";
import Card from "./types/Card";

function App() {
  // const card = useState();
  const card: Card = {
    image: "https://pngimg.com/d/credit_card_PNG118.png",
    name: "Visa Platinum",
    amountSpent: 100
  };

  useEffect(() => {
    // GET best card here
  })


  return (
    <div className="App">
      <CardRecommendation card={card}></CardRecommendation>
      <CardInformation card={card}></CardInformation>
    </div>
  );
}

export default App;