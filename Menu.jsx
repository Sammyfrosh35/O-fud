import { urlFor } from "../../lib/client";
import css from "../../styles/Menu.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Menu({ pizzas }) {
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <span>OUR MENU</span>
        <span>Menu that Always</span>
        <span>Makes you Salivate</span>
      </div>

      <div className={css.menu}>
        {/* pizzas */}
        {pizzas.map((pizza, id) => {
          const src = urlFor(pizza.image).width(200).url();
          return (
            <div className={css.pizza} key={id}>
              <Link href={`./pizza/${pizza.slug.current}`}>
                <div className={css.imagewrapper}>
                  <Image
                    loader={() => src}
                    src={src}
                    alt=""
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
              </Link>

              <span>{pizza.name}</span>
              <span>
                <span style={{ color: "var(--themeRed)" }}>$</span>{" "}
                {pizza.price[1]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
