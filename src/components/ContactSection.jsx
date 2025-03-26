import { MapPin, Mail, Phone, Send } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // prevents for reloading
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 ">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have questions or feedback? We'd love to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 ">
          <div className="animated-slide-in">
            <div className="bg-embuer-linen rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-embuer-seaspray mb-6 font-playfair">
                Contact Information
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-embuer-babyblue flex items-center justify-center mr-4 shrink-0">
                    <MapPin className="w-5 h-5 text-embuer-seaspray" />
                  </div>
                  <div>
                    <p className="font-medium text-embuer-seaspray">
                      Our Location
                    </p>
                    <p className="text-gray-600">
                      Embuer Health Pvt Ltd Caxton House, Suite #200 2E,
                      Jhandewalan Extn. NEW DELHI DELHI India 110055
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-embuer-babyblue flex items-center justify-center mr-4 shrink-0">
                    <Mail className="w-5 h-5 text-embuer-seaspray" />
                  </div>
                  <div>
                    <p className="font-medium text-embuer-seaspray">Email Us</p>
                    <p className="text-gray-600">sales@embuer.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-embuer-babyblue flex items-center justify-center mr-4 shrink-0">
                    <Phone className="w-5 h-5 text-embuer-seaspray" />
                  </div>
                  <div>
                    <p className="font-medium text-embuer-seaspray">Call Us</p>
                    <p className="text-gray-600">+91 88001 15999</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl overflow-hidden h-[300px] shadow-sm border-0 border-embuer-babyblue/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d10469155.677517224!2d66.7306922842991!3d23.322918859147155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d18.5764157!2d73.994756!4m5!1s0x390cfd67d88241a5%3A0x66dabc3409c4d59d!2sAmbition%20Achiever%2C%202-E%2C%20Caxton%20House%2C%20Rani%20Jhansi%20Rd%2C%20Block%20E%204%2C%20Jhandewalan%20Extension%2C%20Jhandewalan%2C%20New%20Delhi%2C%20Delhi%20110055!3m2!1d28.6471591!2d77.20601789999999!5e0!3m2!1sen!2sin!4v1742501278059!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-embuer-babyblue/20">
              <h3 className="text-xl font-semibold text-embuer-seaspray mb-6 font-playfair">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-600 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-embuer-babyblue/50 focus:outline-none focus:ring-2 focus:ring-embuer-seaspray/50"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-600 mb-1"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-embuer-babyblue/50 focus:outline-none focus:ring-2 focus:ring-embuer-seaspray/50"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-embuer-babyblue/50 focus:outline-none focus:ring-2 focus:ring-embuer-seaspray/50"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-embuer-babyblue/50 focus:outline-none focus:ring-2 focus:ring-embuer-seaspray/50"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-embuer-seaspray text-white rounded-lg font-medium flex items-center justify-center hover:bg-embuer-seaspray/90 transition-colors"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </button>
              </form>
            </div>

            <div className="mt-8 bg-embuer-sunshine/30 rounded-xl p-6 animated-slide-in-right">
              <h3 className="text-xl font-semibold text-embuer-seaspray mb-4 font-playfair">
                Newsletter
              </h3>
              <p className="text-gray-600 mb-4">
                Subscribe to our newsletter to get updates on our latest
                products and offers.
              </p>

              <form className="flex space-x-2">
                <input
                  type="email"
                  className="flex-1 px-4 py-3 rounded-lg border border-embuer-babyblue/50 focus:outline-none focus:ring-2 focus:ring-embuer-seaspray/50"
                  placeholder="Your email address"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-3 bg-embuer-seaspray text-white rounded-lg font-medium hover:bg-embuer-seaspray/90 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
