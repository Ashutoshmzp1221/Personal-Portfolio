import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../CSS/Contact.css";

export default function Contacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    const email = form.current.elements.email.value;
    const name = form.current.elements.name.value;
    const message = form.current.elements.message.value;
  
    emailjs
      .sendForm("service_ashutosh", "template_60s6heo", form.current, "ijK1KAqOlqXMj6C-f")
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
  
          
          sendAutoReply(email, name, message);
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  
    e.target.reset(); 
  };
  

  const sendAutoReply = (toEmail, fromName, message) => {
    emailjs
      .send(
        "service_ashutosh",
        "template_c6jzqwm", 
        {
          to_email: toEmail,              
          from_name: fromName,           
          message_html: message,          
        },
        "ijK1KAqOlqXMj6C-f"              
      )
      .then(
        (result) => console.log("✅ Auto-reply sent:", result.text),
        (error) => console.error("❌ Auto-reply failed:", error.text)
      );
  };
  
  
  
  return (
    <section className="text-white font-mono text-sm px-4">
      <h2 className="text-base font-bold text-gray-500 mb-4"><span className="text-gray-500">{`//`}</span> Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className="max-w-2xl mx-auto space-y-4 bg-[#1e1e1e] p-6 border border-gray-700 rounded">
        {[
          { id: "name", type: "text", label: "name", placeholder: "Your Name" },
          { id: "email", type: "email", label: "email", placeholder: "your@email.com" },
          { id: "subject", type: "text", label: "subject", placeholder: "Let's connect" },
        ].map(({ id, type, label, placeholder }) => (
          <div key={id} className="text-gray-400">
            <span className="text-yellow-400">const</span>{" "}
            <span className="text-blue-400">{label}</span>{" "}
            <span className="text-white">= "</span>
            <input
              id={id}
              name={id}
              type={type}
              required
              placeholder={placeholder}
              className="bg-transparent border-none outline-none text-gray-200 placeholder-gray-500 w-56 inline-block"
            />
            <span className="text-white">";</span>
          </div>
        ))}

        <div className="text-gray-400">
          <span className="text-yellow-400">const</span>{" "}
          <span className="text-blue-400">message</span>{" "}
          <span className="text-white">= `</span>
          <textarea
            id="message"
            name="message"
            rows={3}
            required
            placeholder="Your message here..."
            className="bg-transparent border-none outline-none text-gray-200 placeholder-gray-500 w-full resize-none mt-1"
          />
          <span className="text-white">`;</span>
        </div>

        <div>
          <button
            type="submit"
            className="mt-4 bg-[#2a2360] hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
          >
            return <span className="text-green-400">"Send Message"</span>;
          </button>
        </div>
      </form>
    </section>
  );
}
