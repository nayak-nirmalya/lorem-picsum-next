import React from "react";

import HeaderText from "@/components/HeaderText";
import RandomImage from "@/components/RandomImage";
import RefreshButton from "@/components/RefreshButton";
import Share from "@/components/Share";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen w-screen">
      <HeaderText />
      <RefreshButton />
      <RandomImage />
      <Share />
    </div>
  );
}
