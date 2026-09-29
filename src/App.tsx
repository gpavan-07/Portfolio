import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import BackgroundGlow from "./components/BackgroundGlow";
import HeaderProfile from "./components/HeaderProfile";
import SidebarNav, { type TabId } from "./components/SidebarNav";
import HomeView from "./components/HomeView";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import CodingProfiles from "./components/CodingProfiles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [activeTab, setActiveTab] = useState<TabId>("home");

  const renderTabContent = () => {
    switch (activeTab) {
      case "home":
        return <HomeView onSelectTab={setActiveTab} />;
      case "projects":
        return <Projects />;
      case "skills":
        return <Skills />;
      case "education":
        return <Education />;
      case "experience":
        return <Experience />;
      case "certifications":
        return <Certifications />;
      case "coding-profiles":
        return <CodingProfiles />;
      case "contact":
        return <Contact />;
      default:
        return <HomeView onSelectTab={setActiveTab} />;
    }
  };

  return (
    <ThemeProvider>
      <a
        href="#main-box"
        className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-white transition-transform focus-visible:translate-y-0"
      >
        Skip to content
      </a>

      <BackgroundGlow />

      <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl space-y-6">
          {/* Top Profile Header */}
          <HeaderProfile onNavigateToContact={() => setActiveTab("contact")} />

          {/* Main Box Container with Slidebar/Sidebar & Content Panel */}
          <main
            id="main-box"
            className="card-surface overflow-hidden rounded-3xl p-0 shadow-2xl backdrop-blur-xl transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row min-h-[600px]">
              {/* Sidebar / Slidebar Navigation */}
              <SidebarNav activeTab={activeTab} onSelectTab={setActiveTab} />

              {/* Active Tab View Content Box */}
              <div className="box-content-panel flex-1 p-5 sm:p-8 lg:p-10">
                {renderTabContent()}
              </div>
            </div>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
