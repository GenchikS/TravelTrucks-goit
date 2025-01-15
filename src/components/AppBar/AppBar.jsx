import Navigation from "../Navigation/Navigation.jsx";
import css from "./AppBar.module.css"

export default function AppBar() {
    return (
      <div className={css.container}>
        <Navigation/>
      </div>
    );
}