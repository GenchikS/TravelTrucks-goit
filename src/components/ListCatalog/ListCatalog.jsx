import css from "./ListCatalog.module.css"

export default function ListCatalog() {
    return (
      <div className={css.card}>
        <div className={css.img}>
          <img
            src="https://images.pexels.com/photos/952724/pexels-photo-952724.jpeg?auto=compress&cs=tinysrgb&w=240&dpr=2"
            alt="picture auto"
          />
        </div>
        <div className={css.textCard}>
          <div className={css.name}>
            <p>Name</p>
            <p>price</p>
          </div>
          <div className={css.name}>
            <p>grade</p>
            <p>City</p>
          </div>
          <p>Supporting text</p>
          <div>
            <div className={css.badges}>
              <p className={css.textBadges}>1</p>
              <p className={css.textBadges}>2</p>
              <p className={css.textBadges}>3</p>
            </div>
            <div className={css.badges}>
              <p className={css.textBadges}>4</p>
            </div>
          </div>
        </div>
      </div>
    );
}