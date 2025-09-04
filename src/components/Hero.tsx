import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-orange-400 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Contenuto principale */}
      <div className="container mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="mb-0 animate-fade-in drop-shadow-glow">
          <img
            src="/immages/SOLO LOGO.png"
            alt="Logo Cozzi Web"
            className="w-48 h-48 md:w-64 md:h-64 mx-auto"
          />
        </div>

        {/* Testo COZZI_WEB */}
        <div className="mb-2 animate-fade-in">
          <div className="text-6xl md:text-8xl font-black text-white tracking-wider drop-shadow-text">
            COZZI_WEB
          </div>
          <div className="text-lg md:text-xl text-white tracking-widest mt-2 drop-shadow-text">
            EASY SITES, BIG RESULTS
          </div>
        </div>

        {/* Descrizione professionale */}
        <br></br>
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in-delay">
          Sviluppatore Web con la passione per creare siti moderni, funzionali e su misura.
        </p>
        <p className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
          Trasformo le tue idee in siti web professionali, responsive e ottimizzati.
          Dalla vetrina aziendale alla landing page per eventi, creo soluzioni digitali su misura.
        </p>

        {/* Pulsanti */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-delay-3">
          <button
            onClick={() => scrollToSection('servizi')}
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-glow-green"
          >
            Scopri i miei servizi
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105 hover:shadow-glow-white"
          >
            Vedi i miei lavori
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12 animate-fade-in-delay-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 transition-colors transform hover:scale-110"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors transform hover:scale-110"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:cozziwebstudio@gmail.com"
            className="text-white hover:text-orange-400 transition-colors transform hover:scale-110"
          >
            <Mail size={28} />
          </a>
        </div>

        {/* Scroll Down Indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="text-white hover:text-green-400 transition-colors animate-bounce"
        >
          <ArrowDown size={32} />
        </button>
      </div>

      {/* Animazioni e stili aggiuntivi */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-fade-in-delay { animation: fade-in 0.8s ease-out 0.2s both; }
        .animate-fade-in-delay-2 { animation: fade-in 0.8s ease-out 0.4s both; }
        .animate-fade-in-delay-3 { animation: fade-in 0.8s ease-out 0.6s both; }
        .animate-fade-in-delay-4 { animation: fade-in 0.8s ease-out 0.8s both; }

        .drop-shadow-glow {
          filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.7));
        }

        .drop-shadow-text {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .hover\:shadow-glow-green:hover {
          box-shadow: 0 0 15px rgba(74, 222, 128, 0.7);
        }

        .hover\:shadow-glow-white:hover {
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.7);
        }
      `}</style>
    </section>
  );
};

export default Hero;
