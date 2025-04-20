import { EnvelopeIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <EnvelopeIcon className="h-8 w-8 mr-3 text-cyan-400" />
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-cyan-400 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-slate-800 rounded-2xl p-8 shadow-2xl border border-slate-700 animate-on-scroll delay-200">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-slate-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-slate-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-slate-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-slate-700"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
              <input
                type="text"
                placeholder="Project Inquiry"
                className="w-full bg-slate-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-slate-700"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Your message here..."
                className="w-full bg-slate-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-slate-700"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-lg hover:opacity-90 transition duration-300 font-medium shadow-lg shadow-cyan-500/20"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;