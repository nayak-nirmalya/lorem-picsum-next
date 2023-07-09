import React from "react";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Head from "next/head";

import HeaderText from "@/components/HeaderText";
import RandomImage from "@/components/RandomImage";
import RefreshButton from "@/components/RefreshButton";
import Share from "@/components/Share";

export default function Home() {
  const [imageID, setImageID] = useState("");

  useEffect(() => {
    const id = uuidv4() as string;
    setImageID(id);
  }, []);

  return (
    <>
      <Head>
        <title>Random Image from Lorem Picsum</title>
      </Head>

      <div className="flex flex-col items-center h-screen w-screen">
        <HeaderText />
        <RefreshButton />
        <RandomImage imageID={imageID} />
        <Share imageID={imageID} />
      </div>
    </>
  );
}
