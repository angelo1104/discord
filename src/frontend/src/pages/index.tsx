import React from "react";
import Home from "../Components/Home/Home";
import Head from "next/head";

function HomePage() {
  return (
    <>
      <Head>
        <title>Discord | Your Place to Talk and Hang Out</title>
      </Head>
      <Home />
    </>
  );
}

export default HomePage;
