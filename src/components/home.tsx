import { ChevronDown } from "lucide-react";
import React from "react";

type Props = {
  isLoaded: boolean;
  scrollToSection: (sectionId: string) => void;
};

function Home({ isLoaded, scrollToSection }: Props) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Hi, I'm Hareesh Mada!
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 block leading-relaxed">
            Frontend Engineer
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Crafting beautiful, responsive web experiences with 1.5+ years of
          expertise in modern frontend technologies
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection("projects")}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>

        <div className="mt-12 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white mx-auto" />
        </div>
      </div>
    </section>
  );
}

export default Home;
