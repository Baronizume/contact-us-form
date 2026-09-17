import { useState } from "react";
import "./App.css";

function ContactForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-header">
        <div className="icon">✉</div>
        <h2>Contact Us</h2>
        <p>We would love to hear from you. Send us a message!</p>
      </div>

      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email address"
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />
      </div>

      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="What is your enquiry about?"
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message here..."
          rows="5"
        ></textarea>
      </div>

      <button type="submit">
        Send Message
        <span> →</span>
      </button>
    </form>
  );
}

function SubmissionMessage({ data }) {
  if (!data) return null;

  return (
    <div className="success">
      <div className="success-icon">✓</div>

      <h2>Message Submitted Successfully!</h2>

      <p className="success-text">
        Thank you for contacting us. Here is your submitted information:
      </p>

      <div className="submitted-info">
        <p>
          <strong>Name</strong>
          <span>{data.name}</span>
        </p>

        <p>
          <strong>Email</strong>
          <span>{data.email}</span>
        </p>

        <p>
          <strong>Phone</strong>
          <span>{data.phone}</span>
        </p>

        <p>
          <strong>Subject</strong>
          <span>{data.subject}</span>
        </p>

        <p>
          <strong>Message</strong>
          <span>{data.message}</span>
        </p>
      </div>
    </div>
  );
}

function App() {
  const [submittedData, setSubmittedData] = useState(null);

  return (
    <div className="page">
      <header className="university-header">
        <div className="university-logo">U</div>
        <div>
          <h1>University Portal</h1>
          <p>Student Support & Information</p>
        </div>
      </header>

      <main className="container">
        <ContactForm onSubmit={setSubmittedData} />
        <SubmissionMessage data={submittedData} />
      </main>

      <footer>
        © 2026 University Portal • Contact Us
      </footer>
    </div>
  );
}

export default App;

