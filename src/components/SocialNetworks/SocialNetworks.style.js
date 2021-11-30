import styled from 'styled-components';

export const Wrapper = styled.div`
  li {
  margin-bottom: .5rem;
  }

  .item ul {
    border-left: 0.05rem solid var(--sidebar-color);
    padding-left: 1.5rem;
    margin-left: 1.5rem;
  }

  .item a {
    color: var(--sidebar-color);
    text-decoration: underline;
  }

  .item a:visited {
    color: var(--sidebar-color);
  }
`