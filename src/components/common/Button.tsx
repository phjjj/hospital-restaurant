import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  size: "small" | "medium" | "large";
  schema: "primary" | "secondary";
  disabled?: boolean;
}

function Button({ children, size, schema, disabled }: Props) {
  return (
    <ButtonStyle size={size} schema={schema} disabled={disabled}>
      {children}
    </ButtonStyle>
  );
}
const ButtonStyle = styled.button<Omit<Props, "children">>`
  font-size: ${({ size, theme }) => theme.button[size].fontSize};
  padding: ${({ size, theme }) => theme.button[size].padding};
  color: ${({ schema, theme }) => theme.buttonSchema[schema].color};
  background-color: ${({ schema, theme }) => theme.buttonSchema[schema].backgroundColor};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export default Button;
