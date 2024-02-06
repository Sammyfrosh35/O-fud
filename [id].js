import { client } from "../../lib/client";
import Layout from "../../pages/components/Layout";
import css from "../../styles/Ordermodal.module.css";

export const getServerSideProps = async ({ params }) => {
  const query = `*[_type == 'order' && _id == '${params.id}']`;
  const order = await client.fetch(query);
  return {
    props: {
      order: order[0],
    },
  };
};

export default function Orders({ order }) {
  return (
    <Layout>
      <div className={css.container}>
        <span className={css.heading}>Order in Progress</span>
        <div className={css.details}>
          <div>
            <span>Order ID</span>
            <span>{order._id}</span>
          </div>
          <div>
            <span>Customer Name</span>
            <span>{order.name}</span>
          </div>
          <div>
            <span>Phone</span>
            <span>{order.phone}</span>
          </div>
          <div>
            <span>Method</span>
            <span>
                {
                    order.method === 0 ? 'cash on delivery': 'Online payment(paid)'
                }
            </span>
          </div>
          <div>
            <span>Total</span>
            <span>$ {order.total}</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}
