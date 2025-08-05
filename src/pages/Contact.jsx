import React from 'react';
import { FaEnvelopeOpenText, FaPaperPlane, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="space-y-12">
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <FaEnvelopeOpenText /> Get in Touch
        </h2>
        <ul className="mt-4 text-gray-700 space-y-2">
          <li className="flex items-center gap-2">
             Feel free to mail me or contact via social media
          </li>
          <li className="flex items-center gap-2">
            <FaEnvelopeOpenText /> Email: arpit.tripathi@expoundtechnivo.com
          </li>
          <li className="flex items-center gap-2">
            <FaPhoneAlt /> Phone: 7977638769
          </li>
        </ul>
      </section>

      <section className="bg-gray-100 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4 text-blue-600 flex items-center gap-2">
          <FaPaperPlane /> Contact Form
        </h3>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded" />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded" />
          <textarea placeholder="Your Message" className="w-full px-4 py-2 border rounded" rows="4" />
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
