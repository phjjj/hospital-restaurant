import { useEffect } from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}
function Layout({ children }: Props) {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.014;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  return (
    <LayoutStyle>
      <main>{children}</main>
    </LayoutStyle>
  );
}
const LayoutStyle = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export default Layout;
