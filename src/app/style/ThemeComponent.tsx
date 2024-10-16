"use client";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme";

export const ThemeComponent = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

export default ThemeComponent;
