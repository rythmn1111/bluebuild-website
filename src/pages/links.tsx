import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { ExternalLink, ArrowLeft, Heart, Mail, MessageCircle, Calendar, FileText, Users, Globe, Github, Twitter, Linkedin, Instagram } from "lucide-react";

// Dynamically import Silk to avoid SSR issues
const Silk = dynamic(() => import("@/component/slik"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900" />
  ),
});

// Link data - you can easily customize these
const LINKS = [
  {
    id: 1,
    title: "Talk to Founders",
    subtitle: "Schedule a meeting",
    url: "https://cal.com/rythmn/talk-to-founders",
    icon: Calendar,
    color: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "Abhishek Patel",
    subtitle: "+91 95587 73111",
    url: "tel:+919558773111",
    icon: Users,
    color: "from-green-500 to-teal-600"
  },
  {
    id: 3,
    title: "Rythmn Magnani",
    subtitle: "+91 70966 72611",
    url: "tel:+917096672611",
    icon: Users,
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 4,
    title: "Website",
    subtitle: "Visit our main website",
    url: "/",
    icon: FileText,
    color: "from-orange-500 to-red-600"
  }
];

// Social media links
const SOCIAL_LINKS = [
  {
    id: 1,
    title: "GitHub",
    url: "https://github.com/bluebuild",
    icon: Github,
    color: "from-gray-700 to-gray-900"
  },
  {
    id: 2,
    title: "Twitter",
    url: "https://twitter.com/bluebuild",
    icon: Twitter,
    color: "from-blue-400 to-blue-600"
  },
  {
    id: 3,
    title: "LinkedIn",
    url: "https://linkedin.com/company/bluebuild",
    icon: Linkedin,
    color: "from-blue-600 to-blue-800"
  },
  {
    id: 4,
    title: "Instagram",
    url: "https://instagram.com/bluebuild",
    icon: Instagram,
    color: "from-pink-500 to-purple-600"
  }
];

export default function Links() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLinkClick = (url: string) => {
    if (url.startsWith('mailto:')) {
      window.location.href = url;
    } else {
      window.open(url, "_blank");
    }
  };

  const handleBackClick = () => {
    window.history.back();
  };

  if (!isClient) {
    return (
      <div className="w-full h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-white text-xl md:text-2xl text-center px-4">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      {/* Silk Background */}
      <div className="absolute inset-0 z-0">
        <Silk />
      </div>
      


      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 z-10 relative">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <div className="mb-4">
            <img src="/logo.svg" alt="BlueBuild Logo" className="h-16 mx-auto" />
          </div>
          <p className="text-gray-300 text-lg mb-6 max-w-md">
            World Class Content Platform For World Class People
          </p>
        </div>

        {/* Links Container */}
        <div className="w-full max-w-md space-y-4 mb-8">
          {LINKS.map((link) => {
            const IconComponent = link.icon;
            return (
              <div key={link.id} onClick={() => handleLinkClick(link.url)}>
                <div className="w-full h-[70px] bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 cursor-pointer hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-between w-full px-6 py-4 relative">
                                         <div className="flex items-center space-x-4">
                       <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                         <IconComponent className="w-5 h-5 text-white" />
                       </div>
                      <div className="text-left">
                        <div className="text-white font-semibold text-base">{link.title}</div>
                        <div className="text-gray-300 text-sm">{link.subtitle}</div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-white/60" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>



        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center space-x-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>by BlueBuild</span>
          </p>
        </div>
      </div>
    </div>
  );
}
