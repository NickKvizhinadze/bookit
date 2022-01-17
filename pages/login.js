import Layout from "../components/layout/layout";

import { getRooms } from "../redux/actions/roomActions";
import { wrapper } from "../redux/store";

import Login from "./../components/auth/login";

export default function LoginPage() {
  return (
    <Layout>
      <Login />
    </Layout>
  );
}

