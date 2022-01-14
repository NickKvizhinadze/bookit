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
  async ({store, query, req}) => {
    await store.dispatch(getRooms(req, query.page, query.location, query.guests, query.category));
  }
);
