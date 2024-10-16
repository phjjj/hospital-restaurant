import type { Metadata } from "next";
import StyledComponentsRegistry from "./lib/registry";
import ThemeComponent from "./style/ThemeComponent";

export const metadata: Metadata = {
  title: "병원맛집",
  description: "근처 병원을 추천해줍니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <div id='root'>
          <StyledComponentsRegistry>
            <ThemeComponent>{children}</ThemeComponent>
          </StyledComponentsRegistry>
        </div>
      </body>
    </html>
  );
}
