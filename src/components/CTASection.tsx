export const CTASection = () => {
  return (
    <section id="contact-section" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="slide-up mb-8 text-3xl md:text-4xl lg:text-5xl font-editorial font-semibold leading-tight">
            Ready to make your next project go viral?
          </h2>
          
          <p className="fade-in mb-12 text-lg md:text-xl font-inter leading-relaxed text-gray-600">
            Let's create something unforgettable together. If you have an important project and would like my help, contact me below.
          </p>
          
          <a
            href="https://wa.link/pkr683"
            target="_blank"
            rel="noopener noreferrer"
            className="fade-in inline-block bg-blue-600 text-white font-inter font-semibold text-lg px-10 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Start Creating Now
          </a>
        </div>
      </div>
    </section>
  );
};