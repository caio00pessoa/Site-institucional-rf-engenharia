import type { NextConfig } from "next";
const nextConfig: NextConfig={output:"export",trailingSlash:true,poweredByHeader:false,turbopack:{root:import.meta.dirname},images:{unoptimized:true}};
export default nextConfig;
