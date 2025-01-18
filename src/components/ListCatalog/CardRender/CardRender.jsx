// import Card from "../Card/Card.jsx";
import Card from "../Card/Card.jsx";
import css from "./CardRender.module.css";
// import { useSelector } from "react-redux";

export default function CardRender({items}) {
//   console.log(items);
  
//   const items = useSelector(state => state.card.items)
    // const { name, price, rating, location, description, gallery, engine } = autoCatd;
    return (
    <ul className={css.containerCard}>
      {items.map(
        ({
          id,
          name,
          price,
          rating,
          location,
          description,
          transmission,
          engine,
          form,
        //   gallery,
        }) => (
          <li className={ css.list} key={id}>
                  <Card name={name} price={price} rating={rating} location={location} description={description} transmission={transmission} engine={engine} form={form} />
          </li>
        )
      )}
    </ul>
  );
}