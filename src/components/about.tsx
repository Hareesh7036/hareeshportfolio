import { Code } from "lucide-react";

function About() {
  return (
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
                {" "}
                I&apos;m a Full-Stack Developer with around 2 years of
                experience, currently working at MTAP Technologies on
                production-grade web applications. I build fast, responsive, and
                scalable UIs using JavaScript, TypeScript, React.js, and
                Next.js, with a strong focus on developer experience and
                performance.{" "}
              </p>{" "}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {" "}
                I specialize in Tailwind CSS and component-driven UI, manage
                state with Redux Toolkit, Zustand, and React Query, and handle
                form validation using React Hook Form and Zod. On the backend, I
                work with Node.js, Express.js/Elysia.js, MongoDB, and Socket.io
                for real-time features, and I deploy production apps using Git,
                GitHub, Vercel, Render, and AWS.{" "}
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
            <div className="relative hidden md:block">
              <div className="w-56 h-56 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <div className="w-56 h-56 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center">
                  <Code className="w-24 h-24 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
