import CardRender from "./CardRender/CardRender.jsx";
import NoCard from "./NoCard/NoCard.jsx";

export default function ListCatalog({items}) {
    return (items.length ? <CardRender items={ items} /> : <NoCard />)
}