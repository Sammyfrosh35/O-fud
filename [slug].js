import Image from "next/image";
import { client, urlFor } from "../../lib/client";
import Layout from "../components/Layout";
import css from "../../styles/Pizza.module.css";
import LeftArrow from "../../assets/arrowLeft.png";
import RightArrow from "../../assets/arrowRight.png";
import { useState } from "react";

const Pizza = ({ pizza }) => {
  const src = urlFor(pizza.image).url();

 const [size, SetSize] = useState(1)
 
  return (
    <Layout>
      <div className={css.container}>
        <div className={css.imagewrapper}>
          <Image
            loader={() => src}
            src={src}
            alt=""
            layout="fill"
            unoptimized
            objectFit="cover"
          />
        </div>

        {/* right side */}
        <div className={css.right}>
          <span>{pizza.name}</span>
          <span>{pizza.details}</span>

          <div className={css.size}>
            <span>Size</span>
            <div className={css.sizevariants}>
              <div onClick={()=> SetSize(0)} className={size===0? css.selected : ""}>Small</div>
              <div onClick={()=> SetSize(1)} className={size===1? css.selected : ""}>Medium</div>
              <div onClick={()=> SetSize(2)} className={size===2? css.selected : ""}>Large</div>
            </div>
          </div>

          <span><span style={{color:"var(--themeRed)"}}>$</span> {pizza.price[size]}</span>
          {/* Quantity tab */}
          <div className={css.quantity}>
            <span>Quantity</span>
            <div className={css.counter}>
              <Image
                src={LeftArrow}
                height={20}
                width={20}
                alt=""
                objectFit="contain"
              />

              <span>1</span>

              <Image
                src={RightArrow}
                height={20}
                width={20}
                alt=""
                objectFit="contain"
              />
            </div>
          </div>

        {/* button */}

        <div className={ `btn ${css.btn}`}>
          Add to cart
        </div>

        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "pizza" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const pizza = await client.fetch(
    `
    *[_type == "pizza" && slug.current == $slug][0]
  `,
    { slug }
  );

  return {
    props: {
      pizza,
    },
  };
}

export default Pizza;
