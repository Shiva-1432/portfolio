const Contact = () => {
  return (
    <section id="contact" className="py-20 px-8 text-center">

      <h2 className="text-3xl font-bold mb-6">
        Contact Me
      </h2>

      <p className="text-gray-400 mb-8 max-w-xl mx-auto">
        I'm open to opportunities in Backend, Cloud, and Software Engineering roles. 
        Feel free to reach out for collaborations or hiring discussions.
      </p>

      <div className="flex justify-center gap-4 flex-wrap">

        <a
          href="mailto:your@email.com"
          className="px-6 py-3 border border-gray-600 rounded-lg hover:border-gray-400 transition"
        >
          Email Me
        </a>

        <a
          href="https://github.com/your-username"
          target="_blank"
          className="px-6 py-3 border border-gray-600 rounded-lg hover:border-gray-400 transition"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          className="px-6 py-3 border border-gray-600 rounded-lg hover:border-gray-400 transition"
        >
          LinkedIn
        </a>

      </div>

    </section>
  );
};

export default Contact;
