import React from "react";
import { getSession } from "next-auth/client";
import Layout from "./../../components/layout/layout";
import { Profile } from "../../components/user/profile";

const UpdateProfile = () => {
  return (
    <Layout title="Update Profile">
      <Profile />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default UpdateProfile;
