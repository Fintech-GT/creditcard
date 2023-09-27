import Card from "../types/Card";
import "../assets/CardRecommendation.css";

export default function CardRecommendation(props: {card: Card}) {
    return (<div>
        <img alt="Card" src={props.card.image}></img>
    </div>);
}