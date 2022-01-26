import { getSession } from 'next-auth/client';
import Layout from "../components/layout/layout";
import Login from "./../components/auth/login";

function LoginPage() {
  return (
    <Layout>
      <Login />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default LoginPage;
