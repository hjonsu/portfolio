import React from "react";
import Nav from "../components/Nav";
import styled from "styled-components";
import Intro from "../components/Intro";
import LinkBar from "../components/LinkBar";

export default function Dashboard() {
  const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const ContentBox = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-evenly;
    width: 90%;
  `;
  return (
    <Page>
      <Nav></Nav>
      <ContentBox>
        <Intro />
        <LinkBar />
      </ContentBox>
    </Page>
  );
}
