// import { Canvas } from "@react-three/fiber";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Silk from "@/component/slik";
import AdvancedNavbar from "@/component/AdvancedNavbar";

// Dynamically import GlassSurface to avoid SSR issues
const GlassSurface = dynamic(() => import("@/component/glasssurface"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center">
      <div className="text-white">Loading...</div>
    </div>
  ),
});

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div style={{ 
        margin: 0, 
        padding: 0, 
        width: '100vw', 
        height: '100vh',
        overflow: 'hidden'
      }}>
        <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
          <div className="text-white text-2xl">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      margin: 0, 
      padding: 0, 
      width: '100vw', 
      height: '100vh',
      overflow: 'hidden'
    }}>
      <Silk/>
      
      {/* Advanced Navbar */}
      <AdvancedNavbar />
      
      {/* Main Content with Advanced Glass Surface */}
      
    </div>
  );
}