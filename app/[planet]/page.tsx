"use client";

import React from "react";
import data from "../../component/data.json";
import { getPlanetByName } from "@/component/utils";
import Layout from "@/component/layout";
import Planet from "@/component/planet";

function PlanetPage() {
  
  return (
    <Layout>
      <Planet />
    </Layout>
  );
}

export default PlanetPage;
