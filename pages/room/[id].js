import { RoomDetails } from "../../components/rooms/roomDetails";

import Layout from "../../components/layout/layout";
import { getRoomDetails } from "../../redux/actions/roomActions";
import { wrapper } from "../../redux/store";

export default function RoomDetailsPage() {
  return (
    <Layout>
      <RoomDetails />
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ req, params, store }) => {
    await store.dispatch(getRoomDetails(req, params.id));
  }
);
