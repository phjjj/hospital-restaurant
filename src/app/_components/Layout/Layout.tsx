"use client";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}
function Layout({ children }: Props) {
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
