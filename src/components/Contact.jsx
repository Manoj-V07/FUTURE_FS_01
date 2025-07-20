import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mldldyzr", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <section id="contact" className="bg-slate-800 pt-8 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-50">
        <h2 className="mt-12 text-3xl sm:text-4xl md:text-6xl text-center mb-12 font-bold">✨GET IN TOUCH✨</h2>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 justify-center items-stretch">
          {/* Message Form */}
          <div data-aos = "fade-right" className="w-full lg:w-1/2 bg-slate-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition group hover:scale-[1.03] hover:border hover:border-blue-400">
            <h3 className="text-2xl text-center mb-4">Send Me A Message</h3>
            <p className="text-lg text-center mb-6">Feel free to reach out for any inquiries or just to say hello!</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-lg mb-1 text-slate-300">Your Name:</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full p-3 bg-slate-600 text-white rounded-lg"
                />
              </div>

              <div>
                <label className="block text-lg mb-1 text-slate-300">Your Email:</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full p-3 bg-slate-600 text-white rounded-lg"
                />
              </div>

              <div>
                <label className="block text-lg mb-1 text-slate-300">Subject:</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Subject"
                  className="w-full p-3 bg-slate-600 text-white rounded-lg"
                />
              </div>

              <div>
                <label className="block text-lg mb-1 text-slate-300">Message:</label>
                <textarea
                  name="message"
                  required
                  placeholder="Your Message"
                  className="w-full p-3 bg-slate-600 text-white rounded-lg h-32"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Send Message
              </button>

              {submitted && (
                <p className="text-green-400 mt-2">Thanks! Your message has been sent.</p>
              )}
            </form>
          </div>

          {/* Contact Links */}
          <div  data-aos="fade-left" className="w-full lg:w-1/2 bg-slate-800 p-6 rounded-2xl shadow-md transition group hover:scale-[1.03] hover:border hover:border-blue-400">
            <h3 className="text-2xl text-center mb-6">Feel Free to Contact Me On</h3>

            {/* Email */}
            <div className="flex items-center gap-4 bg-slate-700 p-4 rounded-xl mb-4 hover:border-blue-400 hover:scale-[1.02] transition-all">
              <i className="fas fa-envelope text-xl text-blue-400"></i>
              <div>
                <p className="font-bold">Email</p>
                <a href="mailto:manojmanojvv123@gmail.com" className="text-sm text-blue-300 hover:underline">
                  manojmanojvv123@gmail.com
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-center gap-4 bg-slate-700 p-4 rounded-xl mb-4 hover:border-blue-400 hover:scale-[1.02] transition-all">
              <i className="fab fa-instagram text-xl text-pink-400"></i>
              <div>
                <p className="font-bold">Instagram</p>
                <a href="https://www.instagram.com/manoj_v7689/" className="text-sm text-blue-300 hover:underline">
                  @manoj_v7689
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-4 bg-slate-700 p-4 rounded-xl hover:border-blue-400 hover:scale-[1.02] transition-all">
              <i className="fab fa-linkedin text-xl text-blue-400"></i>
              <div>
                <p className="font-bold">LinkedIn</p>
                <a href="https://www.linkedin.com/in/manoj-v-646218333/" className="text-sm text-blue-300 hover:underline">
                  linkedin.com/in/manoj-v-646218333
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
