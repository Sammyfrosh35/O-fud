import React from "react";
import Layout from "../components/Layout";
import { client } from "../../lib/client";

const pizza = ({ pizza }) => {

    console.log(pizza);

  return 
    <Layout>pizza page</Layout>;
 
 
};

export default pizza;

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type=="pizza" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const pizza = await client.fetch(
    `*[_types=="pizza" && slug.current == ${slug}][0]`
  );

  return {
    props: {
      pizza,
    },
  };
}
