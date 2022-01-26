import Layout from "../components/layout/layout";

import { Register } from "../components/auth/register";
import { getSession } from 'next-auth/client';

function RegisterPage() {
  return (
    <Layout>
      <Register />
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

export default RegisterPage
