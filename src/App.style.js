import styled from "styled-components"

export const Wrapper = styled.div`
    display: grid;
    grid-template-areas: "sidebar header header"
      "sidebar body body"
      "sidebar body body";

  .Sidebar {
    grid-area: sidebar;
  }

  .Header {
    grid-area: header;
  }

  .Body {
    grid-area: body;
  }
`