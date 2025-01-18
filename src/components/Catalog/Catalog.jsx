import { useEffect, useState } from "react";
import css from "./Catalog.module.css"
import axios from "axios";
import ListCatalog from "../ListCatalog/ListCatalog.jsx";



export default function Catalog() {
  const [autoCards, setAutoCard] = useState([]);

   useEffect(() => {
     async function fetchSourceCard() {
       try {
        const response = await axios.get(
          `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers`
        );
        setAutoCard(response.data.items);
       } catch (error) {
        return error
       } finally {
        //  loader
       }
       
    }
     fetchSourceCard();
   }, []);
  return (
    <div className={css.container}>
      <div className={css.filter}>
        <h1>Filters</h1>
      </div>
      <ListCatalog items={autoCards} />
    </div>
  );
}
