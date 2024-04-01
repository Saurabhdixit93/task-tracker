import React from "react";
import Layout from "../Layout";
import Header from "../../components/Dashboard/Header/Header";
import HomeDash from "../../components/Dashboard/maindashboard/HomeDash";

export default function TaskDashboard() {
  return (
    <Layout>
      <div className="flex flex-col gap-4 w-full lg:p-8 p-3 h-full">
        <Header title={"Task Dashboard"} />
        <HomeDash />
      </div>
    </Layout>
  );
}
