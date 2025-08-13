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
  const [cardDistance, setCardDistance] = useState(30);
  const [verticalDistance, setVerticalDistance] = useState(75);
  const [delay, setDelay] = useState(5000);
  const [skewAmount, setSkewAmount] = useState(6);
  const [easing, setEasing] = useState<'elastic' | 'linear'>('elastic');
  const [pauseOnHover, setPauseOnHover] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle button click to redirect to Cal.com
  const handleTalkToFounderClick = () => {
    window.open("https://cal.com/rythmn/talk-to-founders", "_blank");
  };

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
          <div className="text-white text-xl md:text-2xl text-center px-4">Loading...</div>
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
      
      {/* Title Section - Both Mobile and Desktop */}
      <div className="absolute top-1/2 left-4 md:left-50 transform -translate-y-1/2 md:-translate-y-1/2 -translate-y-16 text-white z-10 px-4 md:px-0 max-w-[90vw] md:max-w-none">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-6">
          We Build World Class<br />
          Content Platform For<br />
          World Class People
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 font-normal mb-6 md:mb-8">
          {/* For World Class People */}
        </p>
        
        {/* Talk to Founder Button */}
        <div onClick={handleTalkToFounderClick}>
          <GlassSurface
            width={280}
            height={45}
            borderRadius={25}
            displace={12}
            distortionScale={-120}
            redOffset={15}
            greenOffset={25}
            blueOffset={35}
            brightness={70}
            opacity={0.9}
            mixBlendMode="overlay"
            className="cursor-pointer hover:scale-105 transition-transform duration-300 max-w-[280px] min-w-[250px]"
          >
            <div className="flex items-center justify-between w-full px-3 md:px-4 relative">
              <div className="flex items-center">
                <div className="relative mr-2 md:mr-3">
                  <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                  <div className="absolute inset-0 w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-white font-medium text-sm md:text-base">talk to founder</span>
              </div>
              
              <div className="w-px h-4 bg-white/30 mx-1 md:mx-2"></div>
              <span className="text-white font-medium text-sm md:text-base">setup meet :)</span>
            </div>
          </GlassSurface>
        </div>
      </div>

      {/* CardSwap Component - Mobile Responsive */}
      <div className="absolute bottom-0 right-0 w-full md:w-[1200px] h-[400px] md:h-[1200px] z-20 overflow-hidden">
        <div className="block md:hidden">
          {/* Mobile: Show cards in a horizontal scroll */}
          <div className="flex gap-4 p-4 overflow-x-auto scrollbar-hide h-full">
            <div className="flex-shrink-0 w-[280px] h-[320px]">
              <div className="glass-window flex flex-col h-full">
                <div className="border-b border-white/20 bg-white/10 backdrop-blur-md p-3 rounded-t-xl flex-shrink-0">
                  <div className="flex items-center justify-between">
                    <span className="text-white text-base font-medium flex items-center">
                      <Sparkles className="mr-2 w-4 h-4" />
                      Smooth
                    </span>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-2 relative bg-white/5 backdrop-blur-sm rounded-b-xl overflow-hidden">
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
              </div>
            </div>

            <div className="flex-shrink-0 w-[280px] h-[320px]">
              <div className="glass-window flex flex-col h-full">
                <div className="border-b border-white/20 bg-white/10 backdrop-blur-md p-3 rounded-t-xl flex-shrink-0">
                  <div className="flex items-center justify-between">
                    <span className="text-white text-base font-medium flex items-center">
                      <Zap className="mr-2 w-4 h-4" />
                      Reliable
                    </span>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-2 relative bg-white/5 backdrop-blur-sm rounded-b-xl overflow-hidden">
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
              </div>
            </div>

            <div className="flex-shrink-0 w-[280px] h-[320px]">
              <div className="glass-window flex flex-col h-full">
                <div className="border-b border-white/20 bg-white/10 backdrop-blur-md p-3 rounded-t-xl flex-shrink-0">
                  <div className="flex items-center justify-between">
                    <span className="text-white text-base font-medium flex items-center">
                      <Settings className="mr-2 w-4 h-4" />
                      Customizable
                    </span>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-2 relative bg-white/5 backdrop-blur-sm rounded-b-xl overflow-hidden">
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
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Original CardSwap Animation */}
        <div className="hidden md:block">
          <CardSwap
            width={800}
            height={600}
            cardDistance={cardDistance}
            verticalDistance={verticalDistance}
            delay={delay}
            skewAmount={skewAmount}
            easing={easing}
            pauseOnHover={pauseOnHover}
          >
            <Card customClass="one glass-window flex flex-col">
              <div className="border-b border-white/20 bg-white/10 backdrop-blur-md p-5 rounded-t-xl flex-shrink-0">
                <div className="flex items-center justify-between">
                  <span className="text-white text-lg font-medium flex items-center">
                    <Sparkles className="mr-3 w-5 h-5" />
                    Smooth
                  </span>
                  <div className="flex space-x-2">
                    <div className="w-4 h-4 rounded-full bg-red-500/80"></div>
                    <div className="w-4 h-4 rounded-full bg-yellow-500/80"></div>
                    <div className="w-4 h-4 rounded-full bg-green-500/80"></div>
                  </div>
                </div>
              </div>
              <div className="flex-1 p-3 relative bg-white/5 backdrop-blur-sm rounded-b-xl overflow-hidden">
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
              <div className="border-b border-white/20 bg-white/10 backdrop-blur-md p-5 rounded-t-xl flex-shrink-0">
                <div className="flex items-center justify-between">
                  <span className="text-white text-lg font-medium flex items-center">
                    <Zap className="mr-3 w-5 h-5" />
                    Reliable
                  </span>
                  <div className="flex space-x-2">
                    <div className="w-4 h-4 rounded-full bg-red-500/80"></div>
                    <div className="w-4 h-4 rounded-full bg-yellow-500/80"></div>
                    <div className="w-4 h-4 rounded-full bg-green-500/80"></div>
                  </div>
                </div>
              </div>
              <div className="flex-1 p-3 relative bg-white/5 backdrop-blur-sm rounded-b-xl overflow-hidden">
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
              <div className="border-b border-white/20 bg-white/10 backdrop-blur-md p-5 rounded-t-xl flex-shrink-0">
                <div className="flex items-center justify-between">
                  <span className="text-white text-lg font-medium flex items-center">
                    <Settings className="mr-3 w-5 h-5" />
                    Customizable
                  </span>
                  <div className="flex space-x-2">
                    <div className="w-4 h-4 rounded-full bg-red-500/80"></div>
                    <div className="w-4 h-4 rounded-full bg-yellow-500/80"></div>
                    <div className="w-4 h-4 rounded-full bg-green-500/80"></div>
                  </div>
                </div>
              </div>
              <div className="flex-1 p-3 relative bg-white/5 backdrop-blur-sm rounded-b-xl overflow-hidden">
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
  );
}