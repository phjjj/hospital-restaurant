/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // Single-Page Application (SPA) 출력.
  distDir: "./dist", // Changes the build output directory to `./dist/`.
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
  env: {
    SERVICE_KEY: process.env.NEXT_PUBLIC_SERVICE_KEY,
    NEXT_PUBLIC_SERVICE_URL: process.env.NEXT_PUBLIC_SERVICE_URL,
    OPENAI_API_KEY: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    NAVER_CLIENT_ID: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
    NAVER_CLIENT_SECRET: process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET,
    BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH,
  },
};

export default nextConfig;
