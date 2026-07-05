import { useState } from "react";
import emailjs from "@emailjs/browser";

import { contact } from "../../data/contact";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Mail, Phone, MapPin, Send } from "lucide-react";

// Social Icon Mapping
const iconMap = {
  Github: <FaGithub className="w-6 h-6" />,
  Linkedin: <FaLinkedin className="w-6 h-6" />,
  Twitter: <FaTwitter className="w-6 h-6" />,
};

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");

      setFormData({
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400">
            Have a project in mind or want to discuss an opportunity?
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <a
            href={`mailto:${contact.email}`}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
          >
            <Mail className="mx-auto mb-3 text-blue-600" size={30} />

            <h3 className="font-bold mb-2">Email</h3>

            <p>{contact.email}</p>
          </a>

          <a
            href={`tel:${contact.phone}`}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
          >
            <Phone className="mx-auto mb-3 text-green-600" size={30} />

            <h3 className="font-bold mb-2">Phone</h3>

            <p>{contact.phone}</p>
          </a>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
            <MapPin className="mx-auto mb-3 text-purple-600" size={30} />

            <h3 className="font-bold mb-2">Location</h3>

            <p>{contact.location}</p>
          </div>

        </div>

        {/* Contact Form */}

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12">

          <h3 className="text-2xl font-bold mb-6">
            Send Me a Message
          </h3>

          <form onSubmit={handleSubmit}>

            <div className="grid md:grid-cols-2 gap-4 mb-4">

              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                value={formData.from_name}
                onChange={handleChange}
                required
                className="border rounded-lg p-3 dark:bg-gray-900 dark:border-gray-700"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                value={formData.from_email}
                onChange={handleChange}
                required
                className="border rounded-lg p-3 dark:bg-gray-900 dark:border-gray-700"
              />

            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="border rounded-lg p-3 w-full mb-4 dark:bg-gray-900 dark:border-gray-700"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
              className="border rounded-lg p-3 w-full mb-6 dark:bg-gray-900 dark:border-gray-700"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 rounded-lg font-semibold transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

          {status === "success" && (
            <p className="text-green-600 mt-4 font-medium">
              ✅ Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-600 mt-4 font-medium">
              ❌ Failed to send message. Please try again.
            </p>
          )}

        </div>

        {/* Social Links */}

        <div className="flex justify-center gap-6">

          {contact.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition"
            >
              {iconMap[social.icon] || <Send />}
            </a>
          ))}

        </div>

      </div>
    </section>
  );
}