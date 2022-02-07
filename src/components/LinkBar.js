import React from "react";
import styled from "styled-components";

export default function LinkBar() {
  const Div = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const Li = styled.li`
    font-size: 3em;
  `;
  return (
    <Div>
      <Li>
        <a>about me</a>
      </Li>
      <Li>
        <a>projects</a>
      </Li>
      <Li>
        <a>resume</a>
      </Li>
      <p>
        *PSST! My lovely girlfriend designed and helped code this website for
        me.
      </p>
    </Div>
  );
}
