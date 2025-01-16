import { useEffect, useState } from "react";
// import ListCatalog from "../ListCatalog/ListCatalog.jsx";
import css from "./Catalog.module.css"
import axios from "axios";
// import { useSelector } from "react-redux";
// import {catalog} from "../../redux/store.js"


export default function Catalog() {
  // const itemsAll = useSelector(state => state.auto.items);

  const [autoCard, setAutoCard] = useState([]);
   useEffect(() => {
     async function fetchSourceCard() {
       const response = await axios.get(
         `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers`
       );
       console.log(response.data);
       setAutoCard(response.data.items);
     }
     fetchSourceCard();
   }, []);
  return (
    <div className={css.container}>
      <div className={css.sectionFilter}>
        <h1>Filters</h1>
      </div>
      <ul>
        {autoCard.map((item) => (
          <li key={item.id}>
            <div className={css.card}>
              <div className={css.img}>
                <img href={item.gallery.original} alt="picture auto" />
              </div>
              <div className={css.textCard}>
                <div className={css.name}>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </div>
                <div className={css.name}>
                  <p>{item.rating}</p>
                  <p>{item.location}</p>
                </div>
                <p className={css.description}>{item.description}</p>
                <div>
                  <div className={css.badges}>
                    <p className={css.textBadges}>{item.transmission}</p>
                    <p className={css.textBadges}>{item.engine}</p>
                    <p className={css.textBadges}>{item.form}</p>
                  </div>
                  {/* <div className={css.badges}>
                    <p className={css.textBadges}>4</p>
                  </div> */}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* <ListCatalog/> */}
    </div>
  );
}
