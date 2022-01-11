import { Head } from "next/document";
import React from "react";
import Header from "./header";
import Footer from "./footer";

export const layout = ({
  children,
  title = "Book Best Hotels for your Holiday",
}) => {
  return (
    <div>
      <Head>
        <title>{{ title }}</title>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      {{ children }}
      <Footer />
    </div>
  );
};
