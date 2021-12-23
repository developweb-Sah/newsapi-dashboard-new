import React from "react";
import { Container } from "react-bootstrap";
import Banner from "./Banner";
import Card1 from "./Card1";
import ReferenceTable from "./ReferenceTable";
import Report from "./Report";
import Sidebar from "./Sidebar";

function Main() {
  return (
    <>
      <Container>
        <Sidebar />
        <Banner />
        <Report />
        <Card1 />
        <ReferenceTable />
      </Container>
    </>
  );
}

export default Main;
