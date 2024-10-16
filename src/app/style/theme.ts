"use client";
export type ColorKey = "primary" | "secondary";
export type HeadingSize = "large" | "medium" | "small";
export type ButtonSize = "large" | "medium" | "small";
export type ButtonSchema = "primary" | "secondary" | "third";

interface Theme {
  colors: Record<ColorKey, string>;
  borderRadius: { default: string };
  heading: Record<HeadingSize, { fontSize: string }>;
  button: Record<ButtonSize, { fontSize: string; padding: string }>;
  buttonSchema: Record<
    ButtonSchema,
    { color: string; backgroundColor: string }
  >;
}

export const defaultTheme: Theme = {
  colors: {
    primary: "#007bff",
    secondary: "#f2f2f2",
  },
  heading: {
    large: { fontSize: "3.5rem" },
    medium: { fontSize: "3rem" },
    small: { fontSize: "2.5rem" },
  },
  borderRadius: { default: "10px" },
  button: {
    large: { fontSize: "1.5rem", padding: "20px 50px" },
    medium: { fontSize: "1rem", padding: "20px 40px" },
    small: { fontSize: "0.75rem", padding: "20px 10px" },
  },
  buttonSchema: {
    primary: { color: "white", backgroundColor: "#007bff" },
    secondary: { color: "white", backgroundColor: "#6c757d" },
    third: { color: "black", backgroundColor: "white" },
  },
};
