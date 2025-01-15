import ListCatalog from "../ListCatalog/ListCatalog.jsx";
import css from "./Catalog.module.css"


export default function Catalog() {
    return (
      <div className={css.container}>
        <div className={css.sectionFilter}>
          <h1>Filters</h1>
        </div>
        <ListCatalog/>
    </div>
    );
}
