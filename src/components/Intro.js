import React from "react";
import styled from "styled-components";

export default function Intro() {
  const Div = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 1.4em;
    padding-right: 2em;
  `;
  const Box = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    padding: 0.6em 0.6em;
    width: 25em;
  `;
  const Bio = styled.p`
    font-size: 1.8em;
  `;
  const Divide = styled.div`
    font-size: 0.7em;
    margin-top: 1em;
  `;
  return (
    <Box>
      INTRO.TXT
      <Div>
        <Bio>
          Hi, <br /> I'm Jonathan Su.
          <Divide>
            Software Engineer and video game enthusiast based in Vancouver, BC.
          </Divide>
        </Bio>
      </Div>
    </Box>
  );
}
