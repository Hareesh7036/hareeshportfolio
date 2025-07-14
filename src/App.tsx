import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  Database,
  ChevronDown,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: "React", icon: Code, level: 90 },
    { name: "Next.js", icon: Code, level: 85 },
    { name: "Elysia.js", icon: Code, level: 85 },
    { name: "TypeScript", icon: Code, level: 85 },
    { name: "JavaScript", icon: Code, level: 95 },
    { name: "Tailwind CSS", icon: Palette, level: 90 },
    { name: "HTML/CSS", icon: Palette, level: 95 },
    { name: "Responsive Design", icon: Smartphone, level: 90 },
    { name: "REST APIs", icon: Database, level: 80 },
    { name: "MongoDB", icon: Database, level: 80 },
    { name: "Git/GitHub", icon: Github, level: 85 },
  ];

  const projects = [
    {
      title: "TaskNest",
      description:
        "A production-ready task management app featuring secure authentication, protected routes, and responsive theming. It includes RESTful APIs, efficient state management with React Query, advanced form handling, and UX enhancements like debouncing.",
      tech: [
        "Next.js",
        "React",
        "Typescript",
        "Tailwind CSS",
        "React Query",
        "React Hook Form",
        "Mongo DB",
      ],
      image: "/images/tasknest.webp",
      github: "https://github.com/Hareesh7036/todo_list_nextjs",
      live: "#",
    },
    {
      title: "Info Bricks",
      description:
        " Created a dynamic single-page news application using React, showcasing proficiency in web development. Integrated an external API to fetch real-time news data, providing users with up-to-date information. ",
      tech: ["React", "HTML", "CSS", "JavaScript", "External API Integration"],
      image: "/images/infobricks.jpg",
      github: "https://github.com/Hareesh7036/News-Apllication",
      live: "https://news-apllication.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-md z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">Portfolio</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {["home", "about", "skills", "projects", "contact"].map(
                  (section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                        activeSection === section
                          ? "text-purple-400 bg-white/10"
                          : "text-white hover:text-purple-400 hover:bg-white/5"
                      }`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-purple-400 transition-colors duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["home", "about", "skills", "projects", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                      activeSection === section
                        ? "text-purple-400 bg-white/10"
                        : "text-white hover:text-purple-400 hover:bg-white/5"
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
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

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            About Me
          </h2>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Passionate Frontend Developer
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I'm a Frontend Developer with 1.6 years of experience,
                  currently working at MTAP Technologies on SafeTrax 3.0, an
                  employee transportation platform. I work with JavaScript,
                  TypeScript, React.js, and Next.js to build fast, responsive
                  UIs.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I specialize in Tailwind CSS, manage state using Zustand and
                  React Query, and handle form validation with React Hook Form
                  and Zod. I deploy production apps using GitHub and Vercel.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                    Problem Solver
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                    Team Player
                  </span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                    Fast Learner
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <div className="w-56 h-56 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center">
                    <Code className="w-24 h-24 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">
                    {skill.name}
                  </h3>
                </div>
                <div className="relative">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-400 mt-2 block">
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Featured Projects
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 w-80"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Let's Connect
          </h2>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to collaborate?
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting
                projects. Let's discuss how we can work together to bring your
                ideas to life.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  title="madahareesh12@gmail.com"
                  href="mailto:madahareesh12@gmail.com"
                  className="flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>

                <div className="flex gap-4">
                  <a
                    href="https://github.com/Hareesh7036"
                    className="p-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hareesh-mada-351943201/"
                    className="p-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    title="leetcode"
                    href="https://leetcode.com/u/Hareesh-c-o-d-e/"
                    className="p-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                  >
                    <Code className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Frontend Developer Portfolio. Built with React & Tailwind
            CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
