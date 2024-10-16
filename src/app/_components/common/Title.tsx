"use client";
import styled from "styled-components";
import { ColorKey } from "../../style/theme";

interface Props {
  children: React.ReactNode;
  size: "small" | "medium" | "large";
  color: ColorKey;
}

function Title({ children, size, color }: Props) {
  return (
    <TitleStyle size={size} color={color}>
      {children}
    </TitleStyle>
  );
}

const TitleStyle = styled.h1<Omit<Props, "children">>`
  font-size: ${({ size, theme }) => theme.heading[size]?.fontSize};
  color: ${({ color, theme }) => theme.colors[color]};
`;

export default Title;
