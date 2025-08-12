// import { Canvas } from "@react-three/fiber";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Silk from "@/component/slik";
import AdvancedNavbar from "@/component/AdvancedNavbar";
import FallingText from "@/component/falling-text";

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
      
                    {/* Main Content - Hero Title */}
       <div className="absolute inset-0 flex items-center justify-center z-10">
         <h1 className="text-6xl font-bold text-white text-center">
           We Make World Class Content Platform for World Class People
         </h1>
       </div>
      
             {/* Advanced Navbar */}
       <AdvancedNavbar />
       
       {/* Falling Text at Bottom */}
       <div className="absolute bottom-0 left-0 right-0 z-20 h-64">
         <FallingText
           text={`BlueBuild Digital is a cutting-edge digital agency specializing in innovative web solutions, creative design, and transformative technology that empowers businesses to thrive in the digital landscape.`}
           highlightWords={["BlueBuild", "Digital", "innovative", "creative", "transformative", "technology"]}
           trigger="auto"
           backgroundColor="transparent"
           wireframes={false}
           gravity={0.56}
           fontSize="2rem"
           mouseConstraintStiffness={0.9}
         />
       </div>
      
      {/* Main Content with Advanced Glass Surface */}
      
    </div>
  );
}