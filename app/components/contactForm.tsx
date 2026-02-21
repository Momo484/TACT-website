import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name, // Use actual form data instead of hardcoded strings
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        // This catches 400 or 500 errors from the server
        throw new Error("Failed to send message");
      }

      const result = await response.json();

      // Success path
      setStatus("success");
      alert("Thank you for your message! We'll get back to you soon.");

      // Only clear form if the email was sent successfully
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      // This catches network crashes or the Error we threw above
      console.error("Submission Error:", error);
      setStatus("error");
      alert(
        "Oops! Something went wrong. Please try again or email us directly at company@gmail.com.",
      );
    } finally {
      // Reset status after a delay if you want the button to become clickable again
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-2xl mx-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 bg-white border border-gray-100">
      <h2 className="text-3xl font-semibold mb-2 text-gray-800">
        Get in Touch
      </h2>
      <p className="text-gray-600 mb-8">
        Have a project in mind? We'd love to hear from you.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {status === "success" && (
          <div className="p-4 text-green-800 bg-green-50 rounded-lg text-sm border border-green-200">
            ✅ Thank you! Your message has been received. We'll be in touch
            shortly.
          </div>
        )}

        {/* Row 1: Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
              Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
              Email *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="jane@company.com"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none transition-all"
            />
          </div>
        </div>

        {/* Row 2: Phone and Company */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+61 400 000 000"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
              Company
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Pty Ltd"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none transition-all"
            />
          </div>
        </div>

        {/* Row 3: Message */}
        <div>
          <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
            Message *
          </label>
          <textarea
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="How can we help with your next project?"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
        >
          {status === "sending" ? "Sending Inquiry..." : "Submit Message"}
        </button>
      </form>
    </div>
  );
}
