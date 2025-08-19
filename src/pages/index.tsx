// import { Canvas } from "@react-three/fiber";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Silk from "@/component/slik";
import AdvancedNavbar from "@/component/AdvancedNavbar";
import CardSwap, { Card } from "@/component/card";
import { Zap, Settings, Sparkles } from "lucide-react";

// Video URLs for the cards
const VIDEO_URLS = {
  smooth: "https://cdn.dribbble.com/userupload/7053861/file/original-7956be57144058795db6bb24875bdab9.mp4",
  reliable: "https://cdn.dribbble.com/userupload/7078020/file/original-b071e9063d9e3ba86a85a61b9d5a7c42.mp4",
  customizable: "https://cdn.dribbble.com/userupload/7098541/file/original-0b063b12ca835421580e6034368ad95a.mp4"
};

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
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    
    // Set initial dimensions
    if (typeof window !== 'undefined') {
      handleResize();
      setIsClient(true);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate responsive values based on screen size
  const getResponsiveValues = () => {
    if (windowWidth < 480) { // Extra small screens
      return {
        cardWidth: Math.min(280, windowWidth - 40),
        cardHeight: Math.min(210, (windowWidth - 40) * 0.75),
        cardDistance: 12,
        verticalDistance: 25,
        skewAmount: 2,
        buttonWidth: Math.min(250, windowWidth - 80),
        buttonHeight: 40
      };
    } else if (windowWidth < 640) { // Small screens
      return {
        cardWidth: Math.min(320, windowWidth - 40),
        cardHeight: Math.min(240, (windowWidth - 40) * 0.75),
        cardDistance: 15,
        verticalDistance: 30,
        skewAmount: 3,
        buttonWidth: Math.min(280, windowWidth - 60),
        buttonHeight: 42
      };
    } else if (windowWidth < 768) { // Medium screens
      return {
        cardWidth: Math.min(400, windowWidth - 80),
        cardHeight: Math.min(300, (windowWidth - 80) * 0.75),
        cardDistance: 18,
        verticalDistance: 40,
        skewAmount: 4,
        buttonWidth: 300,
        buttonHeight: 45
      };
    } else if (windowWidth < 1024) { // Large screens
      return {
        cardWidth: Math.min(500, windowWidth * 0.6),
        cardHeight: Math.min(375, windowWidth * 0.6 * 0.75),
        cardDistance: 20,
        verticalDistance: 50,
        skewAmount: 4,
        buttonWidth: 320,
        buttonHeight: 48
      };
    } else { // Extra large screens
      return {
        cardWidth: Math.min(800, windowWidth * 0.5),
        cardHeight: Math.min(600, windowWidth * 0.5 * 0.75),
        cardDistance: 30,
        verticalDistance: 75,
        skewAmount: 6,
        buttonWidth: 340,
        buttonHeight: 50
      };
    }
  };

  const responsiveValues = getResponsiveValues();

  // Handle button click to redirect to Cal.com
  const handleTalkToFounderClick = () => {
    window.open("https://cal.com/rythmn/talk-to-founders", "_blank");
  };

  if (!isClient) {
    return (
      <div className="w-screen h-screen overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
          <div className="text-white text-lg sm:text-xl md:text-2xl text-center px-4">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Silk/>
      </div>
      
      {/* Advanced Navbar */}
      <AdvancedNavbar />
      
      {/* Main content container */}
      <div className="relative z-10 w-full h-full pt-16 sm:pt-20 md:pt-24">
        <div className="h-full px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
          <div className="h-full flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12">
            
            {/* Left content section */}
            <div className="flex flex-col items-center lg:items-start text-white max-w-full lg:max-w-[600px] text-center lg:text-left flex-shrink-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6 lg:mb-8 px-2 sm:px-0">
                We Build World Class
                Content Platform For
                World Class People
              </h1>
              
              {/* Responsive button */}
              <div 
                onClick={handleTalkToFounderClick} 
                className="w-full max-w-xs sm:max-w-sm lg:max-w-none"
                style={{ maxWidth: `${responsiveValues.buttonWidth}px` }}
              >
                <GlassSurface
                  width={responsiveValues.buttonWidth}
                  height={responsiveValues.buttonHeight}
                  borderRadius={25}
                  displace={12}
                  distortionScale={-120}
                  redOffset={15}
                  greenOffset={25}
                  blueOffset={35}
                  brightness={70}
                  opacity={0.9}
                  mixBlendMode="overlay"
                  className="cursor-pointer hover:scale-105 transition-transform duration-300 w-full"
                >
                  <div className="flex items-center justify-between w-full px-3 sm:px-4 relative h-full">
                    <div className="flex items-center">
                      <div className="relative mr-2 sm:mr-3">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-ping"></div>
                        <div className="absolute inset-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-white font-medium text-sm sm:text-base">talk to founder</span>
                    </div>
                    <div className="w-px h-3 sm:h-4 bg-white/30 mx-2"></div>
                    <span className="text-white font-medium text-sm sm:text-base">setup meet :)</span>
                  </div>
                </GlassSurface>
              </div>
            </div>
            
            {/* Right cards section */}
            <div className="flex items-center justify-center w-full lg:flex-1 h-48 xs:h-56 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] overflow-visible">
              <CardSwap
                width={responsiveValues.cardWidth}
                height={responsiveValues.cardHeight}
                cardDistance={responsiveValues.cardDistance}
                verticalDistance={responsiveValues.verticalDistance}
                delay={5000}
                skewAmount={responsiveValues.skewAmount}
                easing="elastic"
                pauseOnHover={false}
              >
                <Card customClass="one glass-window flex flex-col">
                  <div className="border-b border-white/20 bg-white/10 backdrop-blur-md p-3 sm:p-4 lg:p-5 rounded-t-xl flex-shrink-0">
                    <div className="flex items-center justify-between">
                      <span className="text-white text-sm sm:text-base lg:text-lg font-medium flex items-center">
                        <Sparkles className="mr-2 sm:mr-3 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                        Smooth
                      </span>
                      <div className="flex space-x-1 sm:space-x-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 rounded-full bg-red-500/80"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 rounded-full bg-yellow-500/80"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 rounded-full bg-green-500/80"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 p-2 sm:p-3 relative bg-white/5 backdrop-blur-sm rounded-b-xl overflow-hidden">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    >
                      <source src={VIDEO_URLS.smooth} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </Card>
               
                <Card customClass="two glass-window flex flex-col">
                  <div className="border-b border-white/20 bg-white/10 backdrop-blur-md p-3 sm:p-4 lg:p-5 rounded-t-xl flex-shrink-0">
                    <div className="flex items-center justify-between">
                      <span className="text-white text-sm sm:text-base lg:text-lg font-medium flex items-center">
                        <Zap className="mr-2 sm:mr-3 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                        Reliable
                      </span>
                      <div className="flex space-x-1 sm:space-x-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 rounded-full bg-red-500/80"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 rounded-full bg-yellow-500/80"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 rounded-full bg-green-500/80"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 p-2 sm:p-3 relative bg-white/5 backdrop-blur-sm rounded-b-xl overflow-hidden">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    >
                      <source src={VIDEO_URLS.reliable} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </Card>
               
                <Card customClass="three glass-window flex flex-col">
                  <div className="border-b border-white/20 bg-white/10 backdrop-blur-md p-3 sm:p-4 lg:p-5 rounded-t-xl flex-shrink-0">
                    <div className="flex items-center justify-between">
                      <span className="text-white text-sm sm:text-base lg:text-lg font-medium flex items-center">
                        <Settings className="mr-2 sm:mr-3 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                        Customizable
                      </span>
                      <div className="flex space-x-1 sm:space-x-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 rounded-full bg-red-500/80"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 rounded-full bg-green-500/80"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 rounded-full bg-yellow-500/80"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 p-2 sm:p-3 relative bg-white/5 backdrop-blur-sm rounded-b-xl overflow-hidden">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    >
                      <source src={VIDEO_URLS.customizable} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </Card>
              </CardSwap>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}