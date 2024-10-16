import type { Metadata } from "next";
import StyledComponentsRegistry from "./_lib/registry";
import ThemeComponent from "./style/ThemeComponent";
import LocationTracker from "./_lib/LocationTracker";
import Layout from "./_components/Layout/Layout";

export const metadata: Metadata = {
  title: "병원맛집",
  description: "근처 병원을 추천해줍니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navermapsClientId = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
  return (
    <html lang='en'>
      <body>
        <script
          type='text/javascript'
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${navermapsClientId}`}></script>
        <LocationTracker />
        <div id='root'>
          <StyledComponentsRegistry>
            <ThemeComponent>
              <Layout>{children}</Layout>
            </ThemeComponent>
          </StyledComponentsRegistry>
        </div>
      </body>
    </html>
  );
}
