import css from "./Card.module.css"

export default function Card({ name, price, rating, location, description, transmission, engine, form }) {
    // console.log(name)
    return (
      <div className={css.container}>
        <div className={css.img}>
          {/* {console.log(autoCard)} */}
          {/* {(imgAuto = autoCard.gallery.flatMap((img) => img.original))} */}
          {/* {console.log(imgAuto[0])} */}

          <img href="" alt="picture auto" />
        </div>
        <div className={css.textCard}>
          <div className={css.name}>
            <p className={css.textName}>{name}</p>
            <p className={css.textPrice}>{price}</p>
          </div>
          <div className={css.name}>
            <p className={css.textRating}>{rating}</p>
            <p className={css.textLocation}>{location}</p>
          </div>
          {/* <div className={css.description}> */}
            <p className={css.description}>{description}</p>
          {/* </div> */}
          <div>
            <div className={css.badgesTop}>
              <p className={css.textBadges}>{transmission}</p>
              <p className={css.textBadges}>{engine}</p>
              <p className={css.textBadges}>{form}</p>
            </div>
            <div className={css.badges}>
              <p className={css.textBadges}>test</p>
            </div>
          </div>
        </div>
      </div>
    );
}