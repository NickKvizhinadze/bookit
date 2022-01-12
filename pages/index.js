import Layout from "../components/layout/layout";

import { getRooms } from "../redux/actions/roomActions";
import { wrapper } from "../redux/store";

import Home from "./../components/home";

export default function Index() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    await context.store.dispatch(getRooms(context.req));
  }
);
