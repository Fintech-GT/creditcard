import Card from "../types/Card";

export default function CardInformation(props: {card: Card}) {
    return (<div>
        <p>{props.card.amountSpent}</p>
    </div>);
}