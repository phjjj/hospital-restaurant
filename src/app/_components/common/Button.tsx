"use client";
import styled from "styled-components";
import { ButtonSchema } from "../../style/theme";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size: "small" | "medium" | "large";
  schema: ButtonSchema;
  disabled?: boolean;
}

function Button({ children, size, schema, disabled, ...props }: Props) {
  return (
    <ButtonStyle size={size} schema={schema} disabled={disabled} {...props}>
      {children}
    </ButtonStyle>
  );
}

export const ButtonStyle = styled.button<Omit<Props, "children">>`
  font-size: ${({ size, theme }) => theme.button[size].fontSize};
  padding: ${({ size, theme }) => theme.button[size].padding};
  color: ${({ schema, theme }) => theme.buttonSchema[schema].color};
  background-color: ${({ schema, theme }) =>
    theme.buttonSchema[schema].backgroundColor};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export default Button;
