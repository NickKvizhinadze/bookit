import Layout from "../components/layout/layout";

import { getRooms } from "../redux/actions/roomActions";
import { wrapper } from "../redux/store";

import Search from "./../components/search";

export default function SearchPage() {
  return (
    <Layout title="Search Rooms">
      <Search />
    </Layout>
  );
}
