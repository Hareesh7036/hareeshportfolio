import { Code, Github, Linkedin, Mail } from "lucide-react";

type Props = {};

function ContactUs({}: Props) {
  return (
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
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can work together to bring your ideas to
              life.
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
  );
}

export default ContactUs;
